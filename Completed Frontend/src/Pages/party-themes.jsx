import { useState, useEffect } from 'react';
import '../Pages/Css/party.css';
import axios from 'axios';

function Party() {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/get-all-themes');
        setThemes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup code if needed
    };
  }, []);

  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (theme) => {
    const updatedCart = [...cart, theme];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <div className="header">
        <h1>Party & Themes</h1>
        <div className="line">
          <hr />
        </div>
      </div>

      {themes.map((theme, index) => (
        <div key={index} className="backyard-olympics">
          <div className="image-container">
            <img src={theme.themeImageURL} alt={theme.themeName} className="party-image" />
          </div>
          <div className="content-container">
            <h1 className="title">{theme.themeName}</h1>
            <p className="subtitle">{theme.themeDescription}</p>
            <div className="details">
              <p>Photographer: {theme.themePhotographer}</p>
              <p>Videographer: {theme.themeVideographer}</p>
              <p>Theme Cost: {theme.themeCost}</p>
              <p>Return Gift: {theme.themeReturnGift}</p>
            </div>
            <div className="count-container">
              <button className="add-to-cart" onClick={() => handleAddToCart(theme)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Party;
