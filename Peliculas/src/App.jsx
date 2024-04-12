// estes el el primer para que las rutas funcionen (el orden importa), antes debes instalar react-router-dom
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  return (
    <>
    <Router>
      <div className='container'>
      <Routes>
        {/* aqui estan las rutas */}
        <Route path= '/' element={<Dashboard/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/register' element={<Register/>}/>
      </Routes>
      </div>
    </Router> 
    </>
  )
}

export default App