import React from 'react'

const Header = ( { setisShowForm } ) => {
    const handleClick = () => {
        setisShowForm(prevValue => !prevValue);
      }
      
  return (
    <header className='flex flex-wrap bg-gray-400 p-3 shadow-md shadow-neutral-400 gap-2'>
        <h1 className='text-4xl font-bold flex-1'>Usuarios</h1>
        <button onClick={handleClick} className='bg-purle-p text-white  p-3 hover:bg-indigo-900'>
        <i className='bx bx-plus'></i>
        Crear nuevo Usuario
        </button>
    </header>
  )
}

export default Header