import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {reset, register } from '../features/auth/authSlice'
import Spinner from "../components/Spinner";

const Register = () => {
  const [fromData, setFromData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = fromData
const navigate = useNavigate()
const dispatch = useDispatch()

const {user, isLoading, isError, isSuccess, message} =useSelector((state) => state.auth)

  const onSubmit = (e) =>{
    e.preventDefault()

    if(password!==password2){
      toast.error('No coinside la contraseña ')
    } else {
      const userData ={
        name, email, password
      }
      dispatch(register(userData))
    }
  }

  useEffect(() =>{
    if(isError){
      toast.error(message)
    } 
    if(isSuccess){
      navigate('/')
    }
    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])

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
{/* nombre */}
        <div><input
        type="text" 
        id="name"
        name="name"
        value={name}
        className="contenedorB" 
        placeholder="Nombre"
        onChange={onChange}  /> </div>
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
        <div><input 
        type="password" 
        id="password2"
        name="password2"
        value={password2}
        className="contenedorB" 
        placeholder="Confirma tu contraseña"
        onChange={onChange}/> </div>
{/* botón */}
      <div>
        <button type='submit' className="contenedorBt" 
>
          crear
        </button>

      </div>
      </form>
    </div>
</>
  )
}

export default Register