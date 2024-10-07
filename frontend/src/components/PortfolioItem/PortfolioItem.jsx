import React, { useContext } from 'react'
import './PortfolioItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import TransitionSecond from '../Transition/TransitionSecond'
const PortfolioItem = ({id,name,image} ) => {

  
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    // <div className='main'>
    <TransitionSecond>
    <div className='Portfolio-item'>
        <div className='Portfolio-item-image-container'>
            <img className='Portfolio-item-image' src={image}/>
            
            {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
           :<div className='perfume-item-container'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
           </div>
          }
       </div>
      <div className='Portfolio-item-info'>
        <div className='Portfolio-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts}/>
        </div>
        {/* <p className='food-item-desc'>
           {description} 
        </p>
        <p className='food-item-price'>Rs: {price}</p> */}
      </div>
    </div>
    </TransitionSecond>
    // </div>
  )
}



export default PortfolioItem
