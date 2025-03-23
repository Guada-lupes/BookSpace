import { useState } from "react";
import '../styles/HeaderStyle.css'; //Ruta de donde coge estilos el componente Header.


/*Rebe*/
import { Link } from "react-router-dom";
/*Rebe*/

const HeaderComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
    /*MENÚ HAMBURGUESA*/
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" style={{ backgroundColor: '#d21b53' }}>
      <div className="header__logo-img">
        <img src= "../src/assets/icons/logo-sin-fondo.png" alt="Logo" style={{ marginLeft: '10px' }} />
      </div>
      <div className="header__title" style={{ fontFamily: 'Roboto'}}>
        BOOKSPACE
      </div>
      
      <div className="header__menu-icon" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="100%" height="100%"> 
          <rect width="100" height="20" fill="#333333"></rect> {/*fill ="color" rellena rect del color elegido"*/}
          <rect y="30" width="100" height="20" fill="#333333"></rect>
          <rect y="60" width="100" height="20" fill="#333333"></rect>
        </svg>
      
      </div>
      {isMenuOpen && (
        <div className="header__menu-overlay">
          <ul className="header__menu-list">

            
            <Link to="/dashboard"><li>Mi Perfil</li></Link>
            
                      
            <Link to="/favorites"><li>Mis Favoritos</li></Link>
            
            <Link to="/logout"><li>Logout</li></Link>
          </ul>
        </div>

      )}
    </header>
  );
};

export default HeaderComponent;