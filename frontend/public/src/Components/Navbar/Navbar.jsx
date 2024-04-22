import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img  src={logo} width="70" height="70" alt="" />
        <p>Sportify</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>} </li>
        <li onClick={() => {setMenu("shoe")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/shoe'>Shoes</Link>{menu==="shoe"?<hr />:<></>}</li>
        <li onClick={() => {setMenu("cricket")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/cricket'>Cricket</Link>{menu==="cricket"?<hr />:<></>}</li>
        <li onClick={() => {setMenu("football")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/football'>Football</Link>{menu==="football"?<hr />:<></>}</li>
        <li onClick={() => {setMenu("others")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/others'>Others</Link>{menu==="others"?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?<button onClick={() => {
          localStorage.removeItem('auth-token');window.location.replace('/')
        }}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img className='cart-icon' src={cart_icon} width="40" height="40" alt="" /></Link>
        
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
