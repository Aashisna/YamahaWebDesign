import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <div className='n'>
      <div className='header'>
        <div className="container ">
          <div className='row d-flex justify-content-between'>
            <div className='col-lg-4 box2 limg'>
              <img className='img-fluid' src='data:image/png;base64,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' alt='' />
            </div>
            <div className='col-lg-4 text-light py-5 info'>
              <p className="info1">Welcome to SK Enterprises</p>
            </div>
            <div className='col-lg-4 text-light box1 text-center py-4 box'>
              <p className="info1">Contact Us- 9841567226</p>
             <p className="info1">email:  <a className="text-light" href="https://gmail.google.com/inbox/">sapimkharel2050@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light "> 
        <div className="container d-flex justify-content-between">
          <div>
            <a className="navbar-brand sm-none">Sk Enterprises</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active  text-danger" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-danger" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-danger" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-danger" href="/bike" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Motor Bike
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item text-danger" href="/bike">R15 M</a></li>
                  <li><a className="dropdown-item text-danger" href="/bike">MT-15 BS6</a></li>
                  <li><a className="dropdown-item text-danger" href="/bike">FZ-X</a></li>
                  <li><a className="dropdown-item text-danger" href="/bike">FZ-Series</a></li>
                  <li><a className="dropdown-item text-danger" href="/bike">SALUTO</a></li>
                  <li><a className="dropdown-item text-danger" href="/bike">SZ-RR</a></li>
                  <li><a className="dropdown-item text-danger" href="/bike">FAZER-25</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-danger" href="/scooter" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Scooter
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item text-danger" href="/scooter">Fascino</a></li>
                  <li><a className="dropdown-item text-danger" href="/scooter">RAY ZR</a></li>
                  <li><a className="dropdown-item text-danger" href="/scooter">RAY Z 113</a></li>
                </ul>
              </li>
            </ul>
            <nav class="navbar bg-light">
              <div class="container-fluid">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-danger " type="submit">Search</button>
                </form>
              </div>
            </nav>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

            </div>
          </div>
        </div>
      </nav>
      </div>
      
      
    </>
  )

}