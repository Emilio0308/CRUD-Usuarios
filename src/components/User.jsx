import React from 'react'

const User = ( { user , deleteUser , setUserIdToEdit , reset , setisShowForm }) => {

    const handleEdit = ()=>{
        setUserIdToEdit(user.id)
        reset(user)
        setisShowForm(prevValue => !prevValue)
    }
  return (
    <article className='bg-gray-400 grid grid-rows-[1fr_40px] px-3 py-3 max-w-[340px] w-full gap-5'>
        <article className='flex flex-col '>
            <div className='flex justify-center items-center my-2 shadow-lg shadow-slate-500 w-full'>
                <img className='w-full object-cover' src={user.image_url? user.image_url : "/userpng.png"} alt= "imagen del usuario" />
            </div>
            <h3 className='font-bold h-[50px] leading-[25px]'>{user?.first_name} {user?.last_name}</h3>
            <ul>
                <span className='text-gray-600'>Email: </span>
                <li>{user.email}</li>
                <span className='text-gray-600'>cumpleaños: </span>
                <li><i className='bx bx-gift'></i> { user.birthday? user.birthday : "-- / -- / ----"}</li>
            </ul>
        </article>
        <div className='grid grid-cols-2 gap-3'>
            <button className='bg-[#BDBDBD] hover:bg-zinc-200 text-xl p-2 mix-blend-color-burn' onClick={handleEdit}><i className='bx bx-edit-alt'></i></button>
            <button className='bg-red-400 hover:bg-red-600 text-xl p-2 mix-blend-color-burn' onClick={()=> deleteUser(user.id)}><i className='bx bx-trash'></i></button>
        </div>
    </article>
  )
}

export default User