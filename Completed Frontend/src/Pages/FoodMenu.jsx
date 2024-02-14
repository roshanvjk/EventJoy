import { useState, useEffect } from 'react';
import '../Pages/Css/food.css';
import Footer from './Footer';

function FoodMenu() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const handleAddToCart = (packageType, price) => {
    const existingPackageIndex = cart.findIndex((item) => item.packageType === packageType);
    if (existingPackageIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingPackageIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { packageType, price, quantity: 1 }];
      setCart(updatedCart);
      console.log(packageType);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
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
            <button onClick={() => handleAddToCart('NonVeg-Basic', 50)}>
  Add to Cart
</button>          </div>

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
            <button onClick={() => handleAddToCart('NonVeg-Standard', 200)}>
  Add to Cart
</button>          </div>

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
            <button onClick={() => handleAddToCart('NonVeg-Premium', 500)}>
  Add to Cart
</button>          </div>
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
          <button onClick={() => handleAddToCart('Veg-Basic', 100)}>
  Add to Cart
</button>        </div>
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
          <button onClick={() => handleAddToCart('Veg-Standard', 250)}>
  Add to Cart
</button>        </div>
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
          <button onClick={() => handleAddToCart('Veg-Premium', 500)}>
  Add to Cart
</button>        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default FoodMenu;
