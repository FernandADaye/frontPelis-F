import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {reset, login } from '../features/auth/authSlice'
import Spinner from "../components/Spinner";
import { FaUser } from "react-icons/fa";

const Login = () => {

const [fromData, setFromData] = useState({
  email: '',
  password: '',
})
const {email, password} = fromData

const navigate = useNavigate()
const dispatch = useDispatch()

const {user, isLoading, isError, isSuccess, message} =useSelector((state) => state.auth)  

useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess || user){
    navigate('/')
  }
  dispatch(reset())

}, [user, isError, isSuccess, message, navigate, dispatch])

const onSubmit= (e)=>{
  e.preventDefault()

  const userData = {
    email,
    password
  }
  dispatch(login(userData))
}

if(isLoading){
  return <Spinner/>

}

const onChange = (e)=>{
  setFromData((prevState) =>({
    ...prevState, 
    [e.target.name]: e.target.value
  }))
}

return (
<>
  
  <div className="registerContenedor">

    <div className="contenedorL">
    <FaUser className="registerUserL"/> 
    </div>
<form onSubmit={onSubmit} className="formRegister">
{/* email */}
      <div><input 
      type="email"
      id="email" 
      name="email"
      value={email}
      className="contenedorB" 
      placeholder="Email"
      onChange={onChange} /> </div>
{/* contraseña */}
      <div><input 
      type="password"
      id="password" 
      name="password"
      value={password}
      className="contenedorB" 
      placeholder="contraseña" 
      onChange={onChange}/> </div>
{/* contraseña 2 */}
{/* botón */}
    <div>
      <button type='submit' className="contenedorBt" >
        Entrar
      </button>

    </div>
    </form>
  </div>
</>

  )
}

export default Login