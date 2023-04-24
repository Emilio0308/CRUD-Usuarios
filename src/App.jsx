import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import User from "./components/User";
import FilterSection from "./components/FilterSection";
import Hero from "./components/Hero";

const BASE_URL = "https://users-crud.academlo.tech";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isShowForm, setisShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [userIdToEdit, setUserIdToEdit] = useState();
  const Submit = (data) => {
    if (data.birthday == "") data.birthday = null;
    if (data.image_url == "") data.image_url = null;
    if (userIdToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };
  const getAllUsers = () => {
    const url = BASE_URL + "/users/";
    axios
      .get(url)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  };
  const createUser = (data) => {
    const url = BASE_URL + "/users/";
    axios
      .post(url, data)
      .then(() => {
        getAllUsers();
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: "",
          image_url: "",
        });
        setisShowForm(!isShowForm);
        alert(`El usuario ${data.first_name.toUpperCase()} se creo correctamente`)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteUser = (id) => {
    if(confirm("¿Seguro que desea eliminar este usuario?")){
    const url = BASE_URL + `/users/${id}/`;
    axios
      .delete(url, id)
      .then(() => {
        getAllUsers();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  const updateUser = (data) => {
    const url = BASE_URL + `/users/${userIdToEdit}/`;
    axios
      .patch(url, data)
      .then(() => {
        getAllUsers();
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: "",
          image_url: "",
        });
        setisShowForm(!isShowForm);
        setUserIdToEdit();
        alert("se Actualizo correctamente")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Hero/>
      <main className="bg-[url(/bg.svg)] bg-cover bg-no-repeat min-h-screen bg-fixed pt-5">
      <div className="font-sans max-w-[1080px] m-auto p-3 flex flex-col gap-9 justify-center">
        <Modal
          isShowForm={isShowForm}
          setisShowForm={setisShowForm}
          handleSubmit={handleSubmit}
          Submit={Submit}
          register={register}
          userIdToEdit={userIdToEdit}
          reset={reset}
          setUserIdToEdit={setUserIdToEdit}
          errors={errors}
        />
        <Header setisShowForm={setisShowForm} />
        <FilterSection users={users} setUsers={setUsers} getAllUsers={getAllUsers} />
        {/* USER__LIST */}
        <section className="grid gap-5 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(240px,1fr))] justify-center items-center justify-items-center">
          {users.map((user) => (
            <User
              user={user}
              key={user.id}
              deleteUser={deleteUser}
              setUserIdToEdit={setUserIdToEdit}
              reset={reset}
              setisShowForm={setisShowForm}
            />
          ))}
        </section>
      </div>
    </main>
    </>
  );
}

export default App;
