import React from "react";
import {useNavigate} from "react-router-dom"
function Navbar() {
 const navigate=useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a onClick={()=>navigate('/')} className="navbar-brand" >
            LİBRARY
          </a>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a onClick={()=>navigate('/')}  className="nav-link active"  >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" onClick={()=>navigate('/book')} >
                  BOOOKS
                </a>
              </li>
              
              <li className="nav-item">
                <a onClick={()=>navigate('/addbook')} className="nav-link active ">ADD BOOKS</a>
              </li>
            </ul>
            <form className="d-flex  " role="search">
              <input
                className="form-control me-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success bg-warning me-4" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
