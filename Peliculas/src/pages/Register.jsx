import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";



const Register = () => {
  const [fromData, setFromData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = fromData


  return (
<>
    
    <div className="registerContenedor">

      <div className="contenedorL">
      <FaUser className="registerUserL"/> 
      </div>
{/* nombre */}
        <div><input
        type="text" 
        id="name"
        name="name"
        value={name}
        className="contenedorB" 
        placeholder="Nombre"  /> </div>
{/* email */}
        <div><input 
        type="email"
        id="email" 
        name="email"
        value={email}
        className="contenedorB" 
        placeholder="Email" /> </div>
{/* contraseña */}
        <div><input 
        type="password"
        id="password" 
        name="password"
        value={password}
        className="contenedorB" 
        placeholder="contraseña" /> </div>
{/* contraseña 2 */}
        <div><input 
        type="password" 
        id="password2"
        name="password2"
        value={password2}
        className="contenedorB" 
        placeholder="Confirma tu contraseña" /> </div>
{/* botón */}
      <div><input 
      type="button"
      className="contenedorBt" 
      value="boton" /></div>
    </div>
</>
  )
}

export default Register