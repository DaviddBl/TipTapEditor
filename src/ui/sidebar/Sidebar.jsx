
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarContext from '../../context/SidebarContext';
import { sidebarLinks } from './SidebarLinks';

const Sidebar = () => {
    const { isSidebarOpen } = useContext(SidebarContext);

    const sidebarOpenClasses = "translate-x-0 ease-out";
    const sidebarClosedClasses = "-translate-x-full ease-in";

    const sidebarClasses = isSidebarOpen
        ? sidebarOpenClasses
        : sidebarClosedClasses;

    const activeClass = 'flex gap-2 items-center bg-gray-200 px-4 py-2 text-sm text-gray-700'
    const notActiveClass = 'flex gap-2 items-center hover:bg-gray-100 px-4 py-2 text-sm text-gray-700'


    return (
        <div
            className={`bg-white fixed h-full w-60 left-0 z-50 transform ${sidebarClasses} transition-all duration-500`}
        >
            <div className='py-0'>
                <div className='py-4 px-4'>
                    <h1>Create</h1>
                </div>
                {
                    sidebarLinks.map(sidebarLinks => (
                        <div key={sidebarLinks.title} className='pb-4'>
                            <div className='border-b-gray-200 border-b'>
                                <h2 className='my-2 px-4 text-gray-800 text-sm'>{sidebarLinks.title}</h2>
                            </div>
                            {
                                sidebarLinks.links.map((link) =>
                                (
                                    <div key={link.id}  >
                                        <NavLink className={({ isActive }) => isActive ? activeClass : notActiveClass} to={link.url}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 20 20" className="w-4 h-4">
                                                <path fillRule="evenodd" d={link.path1} clipRule="evenodd" />
                                                <path d={link.path2} />
                                            </svg>
                                            {link.title}
                                        </NavLink>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;
