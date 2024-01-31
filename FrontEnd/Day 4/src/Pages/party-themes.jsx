import { useState } from 'react';
import '../Pages/Css/party.css';
import Aqua from "../assets/Images/aqua.jpg"
import TopLevel from "../assets/Images/top-level.jpg"
import Cinema from "../assets/Images/cini.jpg"
import Golf from "../assets/Images/golf.jpg"
import Hotel from "../assets/Images/hotel.jpg"
import Footer from './Footer';

function Party() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (theme) => {
    const themeIndex = cart.indexOf(theme);

    if (themeIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(themeIndex, 1);
      setCart(updatedCart);
      alert(`${theme} removed from Cart`);
    } else {
      setCart([...cart, theme]);
      alert(`${theme} added to Cart`);
    }
  };

  const handleRemoveFromCart = (theme) => {
    const updatedCart = cart.filter((item) => item !== theme);
    setCart(updatedCart);
    alert(`${theme} removed from Cart`);
  };

  const handleDeleteFromCart = () => {
    setCart([]);
    alert('All items deleted from Cart');
  };

  return (
    <>
      <div className="header">
        <h1>Party & Themes</h1>
        <div className="line">
          <hr />
        </div>
      </div>

      <div className="backyard-olympics">
        <div className="image-container">
          <img src={Aqua} alt="Aquarium Theme" className="party-image" />
        </div>
        <div className="content-container">
          <h1 className="title">Aquarium Based Theme</h1>
          <p className="subtitle">
            There are lots of fun party games that work well with the underwater theme.
            Even something as simple as Go Fish is a nice touch.
            When picking out the food, it might be best to avoid seafood, however.
          </p>
          <div className="count-container">
            <button className="add-to-cart" onClick={() => handleAddToCart('Aquarium Theme')}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="backyard-olympics">
        <div className="image-container">
          <img src={TopLevel} alt="Backyard Olympics" className="party-image" />
        </div>
        <div className="content-container">
          <h1 className="title">Top Level Theme</h1>
          <p className="subtitle">
          If you want to wow all of the guests with a breathtaking view of the city and the sky, consider finding a rooftop venue or an event space in a high-rise. Panoramic views are an amazing backdrop for any party, especially at venues with glass ceilings. It will make any party hard to forget!
          </p>
          <div className="count-container">
            <button className="add-to-cart" onClick={() => handleAddToCart('Top Level Theme')}>
              Add to Cart
            </button>
          </div>
        </div>
    </div>
    <div className="backyard-olympics">
        <div className="image-container">
          <img src={Cinema} alt="Backyard Olympics" className="party-image" />
        </div>
        <div className="content-container">
          <h1 className="title">A Cinema Theme</h1>
          <p className="subtitle">
          If you know that the birthday celebrant has a favourite movie, or that there is perhaps a new release that they’ve been meaning to see, renting out a cinema is a great way to let them enjoy it on the big screen, along with all of the usual birthday festivities
          </p>
          <div className="count-container">
            <button className="add-to-cart" onClick={() => handleAddToCart('Cinema Theme')}>
              Add to Cart
            </button>
          </div>
        </div>
    </div>
    <div className="backyard-olympics">
        <div className="image-container">
          <img src={Golf} alt="Backyard Olympics" className="party-image" />
        </div>
        <div className="content-container">
          <h1 className="title">Golf Theme</h1>
          <p className="subtitle">
          If you’re looking for a venue that includes activities, look no further than a mini-golf course! Indoor courses often have cool, neon decor, and many have food and drink provided. All you have to do is grab a putter and let the party begin! Maybe make a friendly bet or two on who will win. The more creative the bet, the more memorable the birthday party.
          </p>
          <div className="count-container">
            <button className="add-to-cart" onClick={() => handleAddToCart('Golf Theme')}>
              Add to Cart
            </button>
          </div>
        </div>
    </div>
    <div className="backyard-olympics">
        <div className="image-container">
          <img src={Hotel} alt="Backyard Olympics" className="party-image" />
        </div>
        <div className="content-container">
          <h1 className="title">Hotel Theme</h1>
          <p className="subtitle">
          Hotels are always great event spaces for almost any kind of party, and they usually have a lot of event spaces. But if you want to add a unique twist, host the birthday party somewhere far away. Find a place that everyone can travel to, book the hotel rooms and the venue, and then assemble your guest list. Going to a new place offers plenty of opportunities for checking out the area, trying some new restaurants, and seeing what the location has to offer.
          </p>
          <div className="count-container">
            <button className="add-to-cart" onClick={() => handleAddToCart('Hotel Theme')}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />

      <div>
        <h2>Your Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={handleDeleteFromCart}>Delete All</button>
      </div>
    </>
  );
}

export default Party;
