import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <div>HomePage</div>
            <NavLink className='bg-blue-500' to='/editor'>Editor</NavLink>
        </>
    )
}

export default HomePage