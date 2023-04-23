import React from 'react'

const Modal = ( { isShowForm , setisShowForm , handleSubmit , Submit, register, userIdToEdit, setUserIdToEdit ,reset, errors}) => {
    const handleClick = () => {
        setisShowForm(prevValue => !prevValue);
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
            image_url: "",
          })
          setUserIdToEdit("")
      }
  return (
    <section className={
        `fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${isShowForm? " opacity-100 visible" : "opacity-0 invisible" }`}>
        <form onSubmit={handleSubmit(Submit)} className='bg-white p-4 grid gap-4 w-[350px] relative'>
            <h3 className='text-2xl font-bold border-b-4 border-indigo-900 p-2'>{userIdToEdit? "Editar": "Nuevo"} Usuario</h3>
            <div className="grid gap-1">
                <label className="text-sm font-semibold" htmlFor="first_name">Nombre
                <span className='text-red-500 text-base'>*</span></label>
                <input {...register("first_name" , {
                     required: "Campo obligatorio" ,
                     maxLength:{
                        value: 25,
                        message: "Maxima longuitud: 25 caracteres",
                     },
                     minLength:{
                        value: 1,
                        message: "Debe incluir al menos 1 caracteres",
                     },
                     })}  className="outline-none text-sm border-[1px] rounded-sm bg-gray-100 p-1" id='first_name' type="text" />
                <span className='text-red-500'>{errors.first_name && errors.first_name.message}</span>  
            </div>
            <div className="grid gap-1">
                <label className="text-sm font-semibold" htmlFor="last_name">Apellido
                <span className='text-red-500 text-base'>*</span></label>
                <input {...register("last_name", { 
                    required: "Campo obligatorio",
                    minLength:{
                        value: 1,
                        message: "debe incluir al menos 1 caracter"
                    },
                    maxLength:{
                        value: 25,
                        message: "25 carcateres como maximo"
                    },
                })}  className="outline-none text-sm border-[1px] rounded-sm bg-gray-100 p-1" id='last_name' type="text" />
                <span className='text-red-500'>{errors.last_name && errors.last_name.message}</span>  
            </div>
            <div className="grid gap-1">
                <label className="text-sm font-semibold" htmlFor="email">Correo
                <span className='text-red-500 text-base'>*</span></label>
                <input {...register("email", { 
                    required: "Campo obligatorio" ,
                    pattern: {
                        value: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                        message: "Correo no valido",
                    },
                    minLength:{
                        value: 1,
                        message: "debe incluir al menos 1 caracter",
                    },
                    maxLength:{
                        value: 150,
                        message: "150 carcateres como maximo"
                    }
                })}  className="outline-none text-sm border-[1px] rounded-sm bg-gray-100 p-1" id='email' type="email" />
                <span className='text-red-500'>{errors.email && errors.email.message}</span>
            </div>
            <div className="grid gap-1">
                <label className="text-sm font-semibold" htmlFor="password">Contraseña
                <span className='text-red-500 text-base'>*</span></label>
                <input {...register("password", { 
                    required: "Campo obligatorio",
                    minLength:{
                        value: 1,
                        message: "Debe contener al menos 1 caracter",
                    },
                    maxLength:{
                        value: 25,
                        message: "25 caracteres como maximo",
                    }

                })}  className="outline-none text-sm border-[1px] rounded-sm bg-gray-100 p-1" id='password' type="password" />
                <span className='text-red-500'>{errors.password && errors.password.message}</span>
            </div>
            <div className="grid gap-1">
                <label className="text-sm font-semibold" htmlFor="birthday">Cumpleaños</label>
                <input {...register("birthday")}  className="outline-none text-sm border-[1px] rounded-sm bg-gray-100 p-1" id='birthday' type="date" />
            </div>
            <div className="grid gap-1">
                <label className="text-sm font-semibold" htmlFor="image_url">URL image</label>
                <input {...register("image_url", {
                    pattern: {
                        value :/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                        message : "formato incorrecto",
                    }
                })} 
                className="outline-none border-[1px] rounded-sm bg-gray-100 p-1" id='image_url' type="text" />
                <span className='text-red-500'>{errors.image_url &&  errors.image_url.message }</span>
            </div>
            <i onClick={handleClick} className='bx bx-x absolute right-1 top-1 cursor-pointer'></i>
            <button className='bg-purle-p text-white p-2 hover:bg-indigo-900 transition-colors text-sm'>
                {
                    userIdToEdit? "Guardar Cambios": "Agregar Nuevo Usuario"
                }
            </button>
        </form>
    </section>
  )
}

export default Modal