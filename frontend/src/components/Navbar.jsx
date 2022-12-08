import React from "react";
import {useNavigate} from "react-router-dom"
function Navbar() {
 const navigate=useNavigate();




  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <h1 onClick={()=>navigate('/')} className="navbar-brand" >
            LİBRARY
          </h1>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-4 mb-lg-0">
              <li className="nav-item">
                <h1 onClick={()=>navigate('/')}  className="nav-link active"  >
                  HOME
                </h1>
              </li>
              <li className="nav-item">
                <h1 className="nav-link active" onClick={()=>navigate('/bookk')} >
                  BOOOKS
                </h1>
              </li>
              
              <li className="nav-item">
                <h1 onClick={()=>navigate('/addbook')} className="nav-link active ">ADD BOOKS</h1>
              </li>
            </ul>
            
          </div>
         
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
