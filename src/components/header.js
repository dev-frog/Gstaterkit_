import React from 'react'
import { Link } from 'gatsby'

export const header = () => {
    return (
       <>
         <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/" >_nighthawk</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link className="nav-link" activeClassName="visually-hidden" to="/service" >SERVICE</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" activeClassName="visually-hidden" to="/workshop" >WORKSHOP</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" activeClassName="visually-hidden" to="/lab" >LAB</Link>
                            </li>

                            <li class="nav-item">
                                 <Link className="nav-link" activeClassName="visually-hidden" to="/about" >ABOUT</Link>
                            </li>

                            <li class="nav-item">
                                 <Link className="nav-link" activeClassName="visually-hidden" to="/contact" >CONTACT</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

       </>
    )
}



export default header