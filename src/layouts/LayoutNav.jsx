import React, { useContext } from 'react'
import SidebarContext from '../context/SidebarContext';
import Navbar from '../ui/navbar/Navbar';
import Sidebar from '../ui/sidebar/Sidebar';


const LayoutNav = ({ children }) => {
    const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

    return (
        <>
            <Navbar />
            <div className='grid'>
                {/* <Sidebar /> */}
                <div className='w-full h-full overflow-y-auto'>
                    <div className={isSidebarOpen ? 'pl-60 duration-500' : 'transition-all pl-0 duration-700'}>
                        {children}
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    )
}

export default LayoutNav