import { FaUser,  FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <header>
    <div className="headerContenedor">

      <div className="contenedorA">
        <img src="https://www.flaticon.es/icono-gratis/letra-p_3665997?term=p&page=1&position=3&origin=search&related_id=3665997" alt="" />
      </div>

      <input className="contenedorB" type="text" id="s" value="" placeholder="Buscar"  />
      
      <div>
          <Link className="contenedorA" to='/login'> <FaUser/> Login </Link>
        </div>
      
      <div >
      <Link className="contenedorA" to='/register'> <FaUserPlus/> Registrer </Link>
        </div>
      </div>
        </header>
</>
)}

export default Header