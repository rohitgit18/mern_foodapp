// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'

// const FoodItem = ({id,name,price,description,image}) => {

//     const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={image} alt=""/>
//             {!cartItems[id]
//             ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}></img>
//             :<div className='food-item-counter'>
//                 <img onClick={()=>removeFromCart(prev=>prev-1)} src={assets.remove_icon_red} alt=""/>
//                 <p>{cartItems}</p>
//                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
//             </div>
//             }
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt='' />
//             </div>
//             <p className="food-item-desc">{description}</p>
//             <p className="food-item-price">${price}</p>
//         </div>
      
//     </div>
//   )
// }

// export default FoodItem


import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    // Extract the quantity for the current item ID
    const quantity = cartItems[id] || 0;

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={`${name}`} />
                {!quantity ? (
                    <img
                        className='add'
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt="Add to cart"
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt="Remove from cart"
                        />
                        <p>{quantity}</p> {/* Render quantity here */}
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt="Add more to cart"
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_stars} alt='Rating stars' />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
