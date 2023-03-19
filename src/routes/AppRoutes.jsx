import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DocumentsPage from '../pages/DocumentsPage'
import EditorPage from '../pages/EditorPage'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<h1>LANDING</h1>} />
            <Route path='/editor' element={<EditorPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/documents' element={<DocumentsPage />} />
        </Routes>
    )
}

export default AppRoutes