import { Link } from "react-router-dom"
import './stiles/Header.css'

const Header = () => {
  return (
    <div >
        <header className="header_contenedor">
            <div className="menu">
            <img className='logo_python' src="python_1.png" alt="python" />
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