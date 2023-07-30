


import {Link} from "react-router-dom"
import logo from "../img/logo.png"
const Navs = () =>{


    return(
        <nav className="navbar navbar-expand-md navbar-light ">
        <div className="container-fluit d-flex align-item-center column m-auto">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt=""  className="w-25"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
  
              <li className="nav-item">
                <Link to="/people" className="nav-link" aria-current="page">
                  Consulmen
                </Link>
              </li>
  
              <li className="nav-item">
                <Link to="/paths" className="nav-link" aria-current="page">
                Certificate
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
    
}



export default Navs