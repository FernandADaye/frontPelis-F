import { useState,  } from "react";
import { FaUser } from "react-icons/fa";

const Login = () => {

const [fromData, setFromData] = useState({
  email: '',
  password: '',

})

const {email, password} = fromData
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