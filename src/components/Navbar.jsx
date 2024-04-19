import React from 'react'
import '../index.css'

const Navbar = ({setcategory}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h3 className="navbar-brand logo-container" >News Application</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <h5 className="nav-link" aria-current="page" onClick={() => setcategory('general')} >General</h5>
        </li>
        <li className="nav-item">
          <h5 className="nav-link" aria-current="page" onClick={() => setcategory('business')}>Business</h5>
        </li>
        <li className="nav-item">
          <h5 className="nav-link" aria-current="page" onClick={() => setcategory('sports')} >Sports</h5>
        </li>
        <li className="nav-item">
          <h5 className="nav-link" aria-current="page" onClick={() => setcategory('entertainment')}>Entertainment</h5>
        </li>
        <li className="nav-item">
          <h5 className="nav-link" aria-current="page" onClick={() => setcategory('technology')}>Technology</h5>
        </li>
        <li className="nav-item">
          <h5 className="nav-link" aria-current="page"  onClick={() => setcategory('science')}>Science</h5>
        </li>
        <li className="nav-item">
          <h5 className="nav-link" aria-current="page"  onClick={() => setcategory('health')}>Health</h5>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar