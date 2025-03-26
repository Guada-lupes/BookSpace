import "../styles/HeaderStyle.css"; //Ruta de donde coge estilos el componente Header.

import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; //useLocation nos permite obtener la ruta exacta de la página en la que nos encontramos. 


const HeaderComponent = () => {
  const location = useLocation(); /*useLocation nos permite obtener la ruta en la que nos encontramos actualmente.*/
  console.log("Ruta actual:", location.pathname); /*Comprobración de la ruta en la que nos encontramos*/
  const isLoginPage = location.pathname === "/";
  
  const [isMenuOpen, setMenuOpen] = useState(false); /*useState nos permite manejar el estado de apertura del menu hamburguesa.*/
  
  /*MENÚ HAMBURGUESA*/
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
 
  /*Cierre del menú hamburguesa tras hacer click en cualquiera de las posibles opciones (Mi perfil, mis favoritos y logout)*/
  const closeMenu = () => setMenuOpen (false);
 
  return (
    <header className="header" style={{ backgroundColor: "#d21b53" }}>
      <div className="header__logo-img">
        <img
          src="../src/assets/icons/logo.png"
          alt="Logo"
        />
      </div>

      <div className="header__title" style={{ fontFamily: "Roboto" }}>
        BOOKSPACE
      </div>

      {/*Para ocultar el menú hamburguesa si estamos en la página de inicio (LoginPage): "/" */}
      {!isLoginPage && (
      <div className="header__menu-icon" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="100%" height="100%">
          <rect width="100" height="20" fill="#333333"></rect>{" "}
          {/*fill ="color" rellena rect del color elegido"*/}
          <rect y="30" width="100" height="20" fill="#333333"></rect>
          <rect y="60" width="100" height="20" fill="#333333"></rect>
        </svg>
      </div>
      )}
      
      {isMenuOpen && (
        <div className="header__menu-overlay">
          <ul className="header__menu-list">
            <Link to="/dashboard" onClick={closeMenu}>
              <li>Mi Perfil</li>
            </Link>

            <Link to="/favorites" onClick={closeMenu}>
              <li>Mis Favoritos</li>
            </Link>

            <Link to="/logout" onClick={closeMenu}>
              <li>Logout</li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
