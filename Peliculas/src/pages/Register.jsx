import { FaUser } from "react-icons/fa";

const Register = () => {
  return (
<>
    
    <div className="registerContenedor">

      <div className="contenedorL">
      <FaUser className="registerUserL"/> 
      </div>

        <div><input type="text" className="contenedorB" placeholder="Nombre"  /> </div>
        <div><input type="email" className="contenedorB" placeholder="Email" /> </div>
        <div><input type="password" className="contenedorB" placeholder="contraseña" /> </div>
      <div><input type="button" className="contenedorBt" value="boton" /></div>
    </div>
</>
  )
}

export default Register