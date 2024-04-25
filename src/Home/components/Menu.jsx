import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
        <nav className="navbar navbar-expand-md fixed-top" id="navbar" >
          <div className="container-fluid px-0"><a href="/"><img className="navbar-brand w-75 d-md-none" src="/assets/img/logos/logo.svg" alt="logo" /></a><a className="navbar-brand fw-bold d-none d-md-block" href="/">DXC Technology</a>
          <Link className="btn btn-primary btn-sm ms-md-x1 mt-lg-0 order-md-1 ms-auto" to="/login" style={{textDecoration:"none"}}>Register </Link><button className="navbar-toggler border-0 pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-md-end" id="navbar-content" data-navbar-collapse="data-navbar-collapse">
              <ul className="navbar-nav gap-md-2 gap-lg-3 pt-x1 pb-1 pt-md-0 pb-md-0" data-navbar-nav="data-navbar-nav">
                <li className="nav-item"> <a className="nav-link lh-xl" href="#home">Home</a></li>
                <li className="nav-item"> <a className="nav-link lh-xl" href="#about">About us</a></li>
                <li className="nav-item"> <a className="nav-link lh-xl" href="#service">Support</a></li>
                <li className="nav-item"> <a className="nav-link lh-xl" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default Menu