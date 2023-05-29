import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import {foodContext} from '../App'

function Cart() {
    let context = useContext(foodContext)
    let [cartprice] = useState(0)

    let handleRemove = (e) => {
        context.cart.splice(context.cart.indexOf(e),1);
        context.setCartvalue(context.cart.length)
    }

  return <div className='product-wrapper'>
  {
      context.cart.length>0?<>
      <h2>You Have Ordered:</h2>
  {
      context.cart.map((e,i)=>{
          cartprice += Number(e.price) 
          return <div className='product-item-wrapper' key={i}>
              <div className='product-details'>
                  <h4>{e.name}</h4>
                  <div className='product-price'>₹{e.price}</div>
                  <div className='product-description'>{e.description}</div>
                  <button className='product-btn' onClick={()=>handleRemove(e)}>Remove</button>
              </div>
              <div className='product-image'>
                  <img src={e.image} alt={e.name}></img>
              </div>
          </div>
      })
      }
      <div className='placeholder-wrapper'>
        <div className='product-price'>Total Price: {cartprice}</div>
            <Link to='/'><button className='product-btn-placeholder' onClick={()=>{
                context.setCart([])
                context.setCartvalue(0)
                alert("Your Order Has Been Placed")
                }}>Place Order</button>
            </Link>
        </div>
      </>:<h2>Your Cart Is Empty</h2>
  }
</div>
}

export default Cart