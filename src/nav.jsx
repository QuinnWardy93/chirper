import React from 'react'

const Nav = () => {
    return(
        <React.Fragment>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="http://www.google.com">Chirper</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="http://www.google.com">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://www.google.com">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://www.google.com">Chirps</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://www.google.com" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="http://www.google.com">Action</a>
          <a class="dropdown-item" href="http://www.google.com">Another action</a>
          <a class="dropdown-item" href="http://www.google.com">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</React.Fragment>
    )
}
export default Nav
