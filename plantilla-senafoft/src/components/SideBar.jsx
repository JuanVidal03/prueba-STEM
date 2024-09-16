import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
    HomeIcon,
    UserGroupIcon,
    BookOpenIcon,
    WrenchScrewdriverIcon
  } from '@heroicons/react/24/solid'

import { GlobalContext } from '../context/GlobalContext'

const SideBar = () => {

  const { isMenuOpen } = useContext(GlobalContext);
  
  const menuItems = [
    { titulo: "Inicio", path: "/", icon: <HomeIcon className='w-8'/> },
    { titulo: "Usuarios", path: "/usuarios", icon: <UserGroupIcon className='w-8'/> },
    { titulo: "Materias", path: "/materias", icon: <BookOpenIcon className='w-8'/> },
    { titulo: "Recursos", path: "/recursos", icon: <WrenchScrewdriverIcon className='w-8'/> },
  ]


  return (
   <aside className={`xl:w-[20%] transition-all ${ isMenuOpen ? "sm:block z-20 sm:w-[250px] sm:opacity-100 sm:visible" : "sm:opacity-0 sm:invisible" } xl:visible xl:opacity-100 sm:absolute xl:sticky xl:block top-4 h-[95.5vh] bg-gradient-to-b from-[#414149] to-[#1E1E1F] text-white py-8 px-4 rounded-xl overflow-y-auto custom-scrollbar`}>
      <div>
          <h1 className='text-2xl text-center font-semibold drop-shadow-lg mb-5'>
            Dashboard
          </h1>
          <span className='w-full h-[2px] mb-5 bg-white block'></span>
      </div>
      <div className='flex flex-col gap-2 h-[88.6%]'>
        <div className='h-full'>
          {
            menuItems?.map(menuItem => (
              <NavLink key={menuItem.titulo} to={menuItem.path} className={({ isActive }) => `flex gap-3 px-4 py-2 items-center ${isActive && "bg-gradient-to-r from-blue-500 to-indigo-500" } rounded-lg`}>
                { menuItem.icon }
                <p>{ menuItem.titulo }</p>
              </NavLink>
            ))
          }
        </div>

        <NavLink to="/login" className="flex-1 block items-center bg-red-500 rounded-lg px-4 py-3">
          <p className='uppercase font-semibold text-center'>Cerrar Sesion</p>
        </NavLink>
      </div>
   </aside>
  )
}

export default SideBar;
