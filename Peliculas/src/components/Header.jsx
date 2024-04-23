import { FaUser,  FaUserPlus, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import imagen from "/assets/letra-p.png";

const Header = () => {

  const dispatch = useDispatch()
  const navigate= useNavigate()

  const {user} = useSelector((state) => state.auth)

  const onLogout = () =>{
dispatch(logout())
dispatch(reset())
navigate('/login')
  }

  return (
    <>
        <header>
    <div className="headerContenedor">

      <div>
        <img src={imagen} alt="" className="headerLogo"/>
      </div>

      <input className="contenedorB" type="search" id="s" value="" placeholder="Buscar"  />

    <div className="headerContenedorRutesLi">
      <div>
          <Link className="contenedorA" to='/'> <FaHome/> Inicio </Link>
      </div>
  
      {user ?(
      <>
      <div className="contenedorA" onClick={onLogout}>
      Login Out
      </div>
      </>
  ):(
    <>
    <div>
      <Link className="contenedorA" to='/login'> <FaUser/> Login </Link>
    </div>
  
  <div >
  <Link className="contenedorA" to='/register'> <FaUserPlus/> Registrer </Link>
    </div>
    </>
  )}
    </div>
      </div>
        </header>
</>
)}

export default Header