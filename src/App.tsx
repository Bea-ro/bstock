import { Route, Routes } from 'react-router-dom'
import { Global } from './styles/Globals'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Contacto from './pages/Contacto/Contacto'
import Proyectos from './pages/Proyectos/Proyectos'

function App() {
  return (
    <>
      <Global />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/proyectos' element={<Proyectos />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
