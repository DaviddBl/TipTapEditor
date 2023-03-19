import React, { useContext } from 'react'
import Logo from '../../components/icons/Logo';
import SidebarContext from '../../context/SidebarContext';

const Navbar = () => {
    const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
    return (
        <div className='bg-white sticky top-0 z-50 h-28' >
            <div className='flex gap-5 items-center px-4 py-2 '>
                <button onClick={toggleSidebar} className='rounded-lg p-1 hover:bg-gray-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <Logo />
            </div>
        </div>
    )
}

export default Navbar