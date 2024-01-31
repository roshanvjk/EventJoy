import  { useState } from 'react';
import '../Pages/Css/food.css';
import Footer from './Footer';

function FoodMenu() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (packageType, price) => {
    const existingPackageIndex = cart.findIndex((item) => item.packageType === packageType);
    if (existingPackageIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingPackageIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { packageType, price, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (packageType) => {
    const updatedCart = cart.map((item) => (item.packageType === packageType ? { ...item, quantity: item.quantity + 1 } : item));
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (packageType) => {
    const updatedCart = cart.map((item) =>
      item.packageType === packageType ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    );
    setCart(updatedCart);
  };
  const handleRemoveFromCart = (packageType) => {
    const updatedCart = cart.filter((item) => item.packageType !== packageType);
    setCart(updatedCart);
  };
  return (
    <>
      <div className="baby-show">
        <h1>Food Menu</h1>
        <p>Non - Veg Food Menu</p>
        <div className="pricing-table">
          {/* Basic */}
          <div className="package basic">
            <h2>Basic</h2>
            <p>$50 Per Person</p>
            <ul>
              <li>Party planning</li>
              <li>Party styling</li>
              <li>Party catering</li>
              <li>1-hour entertainer show</li>
              <li>Face painters</li>
            </ul>
            <button onClick={() => handleAddToCart('NonVeg-Basic', 50)}>Add to Cart</button>
            <button onClick={() => handleIncreaseQuantity('NonVeg-Basic')}>Increase Quantity</button>
            <button onClick={() => handleDecreaseQuantity('NonVeg-Basic')}>Decrease Quantity</button>
            <button onClick={() => handleRemoveFromCart('NonVeg-Basic')}>Remove from Cart</button>
          </div>

          {/* Standard */}
          <div className="package standard">
            <h2>Standard</h2>
            <p>$200 Per Person</p>
            <ul>
              <li>Party planning</li>
              <li>Party styling</li>
              <li>Party catering</li>
              <li>2-hour entertainer show</li>
              <li>Face painters</li>
              <li>Balloon modellers</li>
            </ul>
            <button onClick={() => handleAddToCart('NonVeg-Standard', 200)}>Add to Cart</button>
            <button onClick={() => handleIncreaseQuantity('NonVeg-Standard')}>Increase Quantity</button>
            <button onClick={() => handleDecreaseQuantity('NonVeg-Standard')}>Decrease Quantity</button>
            <button onClick={() => handleRemoveFromCart('NonVeg-Standard')}>Remove from Cart</button>
          </div>

          {/* Premium */}
          <div className="package premium">
            <h2>Premium</h2>
            <p>$500 Per Person</p>
            <ul>
              <li>Party planning</li>
              <li>Party styling</li>
              <li>Party catering</li>
              <li>4-hour entertainer show</li>
              <li>5 additional fun possibilities</li>
            </ul>
            <button onClick={() => handleAddToCart('NonVeg-Premium', 500)}>Add to Cart</button>
            <button onClick={() => handleIncreaseQuantity('NonVeg-Premium')}>Increase Quantity</button>
            <button onClick={() => handleDecreaseQuantity('NonVeg-Premium')}>Decrease Quantity</button>
            <button onClick={() => handleRemoveFromCart('NonVeg-Premium')}>Remove from Cart</button>
          </div>
        </div>
      </div>
      <div className="baby-show">
      <p>Veg Food Menu</p>
      <div className="pricing-table">
        <div className="package basic">
          <h2>Basic</h2>
          <p>$100 Per Person</p>
          <ul>
            <li>Party planning</li>
            <li>Party styling</li>
            <li>Party catering</li>
            <li>1-hour entertainer show</li>
            <li>Face painters</li>
          </ul>
          <button onClick={() => handleAddToCart('Veg-Basic', 100)}>Add to Cart</button>
          <button onClick={() => handleIncreaseQuantity('Veg-Basic')}>Increase Quantity</button>
          <button onClick={() => handleDecreaseQuantity('Veg-Basic')}>Decrease Quantity</button>
          <button onClick={() => handleRemoveFromCart('Veg-Basic')}>Remove from Cart</button>
        </div>
        <div className="package standard">
          <h2>Standard</h2>
          <p>$250 Per Person</p>
          <ul>
            <li>Party planning</li>
            <li>Party styling</li>
            <li>Party catering</li>
            <li>2-hour entertainer show</li>
            <li>Face painters</li>
            <li>Balloon modellers</li>
          </ul>
          <button onClick={() => handleAddToCart('Veg-Standard', 250)}>Add to Cart</button>
          <button onClick={() => handleIncreaseQuantity('Veg-Standard')}>Increase Quantity</button>
          <button onClick={() => handleDecreaseQuantity('Veg-Standard')}>Decrease Quantity</button>
          <button onClick={() => handleRemoveFromCart('Veg-Standard')}>Remove from Cart</button>
        </div>
        <div className="package premium">
          <h2>Premium</h2>
          <p>$500 Per Person</p>
          <ul>
            <li>Party planning</li>
            <li>Party styling</li>
            <li>Party catering</li>
            <li>4-hour entertainer show</li>
            <li>5 additional fun possibilities</li>
          </ul>
          <button onClick={() => handleAddToCart('Veg-Premium', 500)}>Add to Cart</button>
          <button onClick={() => handleIncreaseQuantity('Veg-Premium')}>Increase Quantity</button>
          <button onClick={() => handleDecreaseQuantity('Veg-Premium')}>Decrease Quantity</button>
          <button onClick={() => handleRemoveFromCart('Veg-Premium')}>Remove from Cart</button>
        </div>
      </div>
    </div>
    <Footer/>
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.packageType} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FoodMenu;
