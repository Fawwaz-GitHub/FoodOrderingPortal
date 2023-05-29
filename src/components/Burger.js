import React,{useState,useEffect,useContext} from 'react'
import {foodContext} from '../App'
import {useNavigate} from 'react-router-dom'

function Burger() {
    let context = useContext(foodContext);
    let [products,setProducts] = useState([]);
    let navigate = useNavigate();

    let getData = () => {
        if(context.data.length>0)
        {
            setProducts(context.data[1].subItems)
        }
        else
        {
            navigate('/')
        }
    }

    useEffect(()=>{
        getData();
    },[])

    // console.log(context.data[1].subItemsData.name) doubt

  return <div className='product-wrapper'>
      {/* <h2>{context.data[1].subItemsData.name}</h2> */}
      <h2>Crispy Burgers</h2>
      {
          products.map((e,i)=>{
              return <div className='product-item-wrapper' key={i}>
                  <div className='product-details'>
                      <h4>{e.name}</h4>
                      <div className='product-price'>₹{e.price}</div>
                      <div className='product-description'>{e.description}</div>
                      <button className='product-btn' onClick={()=>{
                          context.cart.push(e)
                          context.setCartvalue(context.cart.length)
                      }}>Order Now</button>
                  </div>
                  <div className='product-image'>
                      <img src={e.image} alt={e.name}></img>
                  </div>
              </div>
          })
      }
  </div>
}

export default Burger