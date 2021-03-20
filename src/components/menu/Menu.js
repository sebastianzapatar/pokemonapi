import React from 'react'
import {NavLink} from 'react-router-dom'
export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/buscar"
                    >
                        Buscar
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/acercade"
                    >
                        SobreNosotros
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                
                <ul className="navbar-nav ml-auto">
                    
                    <button
                        
                        className="nav-item nav-link btn" 
                        
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
