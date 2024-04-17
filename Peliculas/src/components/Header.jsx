import { FaUser,  FaUserPlus, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import imagen from "/assets/letra-p.png";

const Header = () => {
  return (
    <>
        <header>
    <div className="headerContenedor">

      <div>
        <img src={imagen} alt="" className="headerLogo"/>
      </div>

      <input className="contenedorB" type="search" id="s" value="" placeholder="Buscar"  />

        <div>
          <Link className="contenedorA" to='/'> <FaHome/> Inicio </Link>
      </div>
      

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