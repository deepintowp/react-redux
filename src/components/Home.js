import React from 'react'

const Home = (props) => {
    //console.log(props.data);
  return (
    <div>
         
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={`./phone.jpg`} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={()=>props.addToCartHandler({
                        price:1000,
                        name:"I phone"
                    })}
                    >
                        Add To Cart</button>
                   <button 
                   className='remove-cart-btn'
                    onClick={()=>props.removeToCartHandler()}
                    >
                        Add To Cart</button>
                        
                </div>
            </div>
        </div>
  )
}

export default Home