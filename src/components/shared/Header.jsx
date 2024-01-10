import { Link, useNavigate } from "react-router-dom"
import './stiles/Header.css'

const Header = () => {

  const navigate=useNavigate()
  const handleInit=()=>{
    navigate('/')
  }
  return (
    <div >
        <header className="header_contenedor">
            <div className="menu">
              <div onClick={handleInit}>
              <img className='logo_python' src="next.png" alt="python" />

              </div>
           
            <nav className="header_nav">
                <lu className="header_lu">
                    <li className="header_li" ><Link className="link" to='/'>Inicio</Link></li>
                    <li className="header_li" ><Link className="link" to='/about'>Quienes somos</Link></li>
                </lu>
            </nav>
            </div>
        </header>
       
    </div>
  )
}

export default Header