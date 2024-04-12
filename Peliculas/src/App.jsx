import {BrowserRouter as Routes, Route}  from 'react-router-dom'

const App = () => {
  return (
    <>
  <Routes>
  <Route path= '/' element={<Dashboard/>}/>
  <Route path= '/login' element={<Login/>}/>
  <Route path= '/register' element={<Register/>}/>
  </Routes>
    </>
  )
}

export default App