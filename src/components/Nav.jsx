import {Link, NavLink} from 'react-router-dom'
import { ModalContact } from './ModalContact'

export const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm navbar-ligth shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className='logo' src='https://www.aarco.com.mx/wp-content/uploads/2019/02/Logo-Aarco.png' width='120' alt="Logo" ></img>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav">
                        <NavLink
                        className={({isActive}) => `nav-link ${isActive ? 'active' : '' }`}
                        to="/">
                            INICIO
                        </NavLink>

                        <NavLink
                        className={({isActive}) => `nav-link ${isActive ? 'active' : '' }`}
                        to="/about">
                            QUIENES SOMOS
                        </NavLink>
                        <li><a href="" className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">CONTÁCTANOS</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <ModalContact/>
    </>
  )
}

