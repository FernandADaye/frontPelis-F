// estes el el primer para que las rutas funcionen (el orden importa), antes debes instalar react-router-dom
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'



const App = () => {
  return (
    <>
    <Router>
      <div className='container'>
        <Header/>
      < Routes>
        {/* aqui estan las rutas */}
        <Route path= '/' element={<Dashboard/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/register' element={<Register/>}/>
      </Routes>
      </div>
    </Router> 
    <ToastContainer/>
    </>
  )
}

export default App