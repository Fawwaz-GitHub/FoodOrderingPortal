import React,{useContext} from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {foodContext} from '../App'
import {Link, useLocation} from 'react-router-dom'; 

function Header() {
    let context = useContext(foodContext)
    let location = useLocation()
  return <div className='head-wrapper'>
      { location.pathname !== "/" && 
      <div><Link to='/'><ArrowBackIcon/></Link></div>
      }
      <div className='head-title'>Food Ordering Portal</div>
      <div className='head-cart'>
          <Link to='/cart'><ShoppingCartIcon/></Link>
          <span className='count'>{context.cartvalue}</span></div>
  </div>
}

export default Header