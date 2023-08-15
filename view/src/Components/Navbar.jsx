import React from 'react'
import { MenuOutline, Bag ,CloseOutline } from 'react-ionicons'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
  
  <header class="header" >
    <div class="container">

      <Link href="#" class="logo">
        <img src="./assets/images/logo.svg" width="148" height="38" alt="recipequeen home" />
      </Link>

      <nav class="navbar" >
        <button class="nav-close-btn" aria-label="close menu" >
{/*          
<CloseOutline
  color={'#00000'} 
  title={"close"}
  height="250px"
  width="250px"
  aria-hidden="true"
/> */}
        </button>

        <Link href="#" class="logo">
          <img src="./assets/images/logo.svg" width="148" height="38" alt="recipequeen home" />
        </Link>

        <ul class="navbar-list">

          <li class="navbar-item">
            <Link href="#" class="navbar-link" >Home</Link>
          </li>

          <li class="navbar-item">
            <Link href="#" class="navbar-link" >About Us</Link>
          </li>

          <li class="navbar-item">
            <Link href="#" class="navbar-link" >Restaurants</Link>
          </li>

          <li class="navbar-item">
            <Link href="#" class="navbar-link" >Contacts</Link>
          </li>

        </ul>
      </nav>

      <div class="header-action">
        <button class="cart-btn" aria-label="cart">
          
{/* <Bag
  color={'#00000'} 
  title={"bag"}
  height="250px"
  width="250px"
  aria-hidden="true"
/> */}

        </button>

        <Link href="#" class="btn btn-primary has-after">Order Now</Link>
      </div>

      <button class="nav-open-btn" aria-label="open menu" >
      {/* <MenuOutline
  color={'#00000'} 
  title={'menu'}
  height="250px"
  width="250px"
  aria-hidden="true"
/> */}

      </button>

      <div class="overlay" ></div>

    </div>

    
  </header>
  )
}

export default Navbar