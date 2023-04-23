import React from "react";

const FilterSection = ({ users, setUsers, getAllUsers }) => {
  const hanldeOrder = (e) => {
    if (e.target.value == "") {
      getAllUsers()
    } else if (e.target.value == "A-Z") {
      let newList = [...users].sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      );
      setUsers(newList);
    }else if (e.target.value == "Z-A") {
      let newList = [...users].sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      ).reverse()
      setUsers(newList);
    }
  };
  return (
    <section className="bg-gray-400 p-3 flex flex-wrap gap-4 items-center">
      <h3 className="font-semibold">Ordenar Usuarios</h3>
      <select name="usersList" id="" onChangeCapture={hanldeOrder} 
      className="outline-none bg-black text-white p-2 rounded-md opacity-70">
        <option value=""    className="bg-black text-white outline-none">todos</option>
        <option value="A-Z" className="bg-black text-white outline-none">A-Z</option>
        <option value="Z-A" className="bg-black text-white outline-none">Z-A</option>
      </select>
    </section>
  );
};

export default FilterSection;
