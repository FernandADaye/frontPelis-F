import { FaUser } from "react-icons/fa";
import { useState,  } from "react";



const Register = () => {
  const [fromData, setFromData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = fromData

  const onSubmit= (e)=>{
    e.preventDefault()
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