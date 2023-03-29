import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
        < Sidebar/>
      <Routes>
          <Route path = "/" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        
      </Routes>
    </>
  )
}

export default App
