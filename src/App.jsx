
import './App.css'
import Tiptap from './components/TipTap'
import { SidebarProvider } from './context/SidebarContext'
import LayoutNav from './layouts/LayoutNav'
import AppRotes from './routes/AppRoutes'
import Navbar from './ui/navbar/Navbar'

function App() {

  return (
    <div className="App">
      <SidebarProvider>
        <LayoutNav>
          <AppRotes />
        </LayoutNav>
      </SidebarProvider>
    </div>
  )
}

export default App
