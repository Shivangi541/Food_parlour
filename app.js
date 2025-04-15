import REACT from "react";
import REACTDOM from "react-dom/client";
import { LOGO_URL } from "./utils/constants";

//import logo from "./assets/logo.jpg";
/**
 * Components of the app
 * - Header: The header of the app
 *    -logo: The logo of the app
 *     -nav-items: The navigation items of the app
 * - Body: The body of the app
 *   - Search: The search bar of the app
 *  - RestaurantList: The list of restaurants
 *  - RestaurantCard: The card of the restaurant
 * -footer: The footer of the app
 */

const Header = () => {
  return (
    <div id="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

// card component
const Rest_card = () => {
  return (
    <div>
      <div className="card">
        <img
          className="card-image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/40a20a8d-ec42-461a-b83c-cf8903a69f31_674917.jpg"
          alt="Cakes"
        ></img>
        <h3>Mio Amore</h3>
        <p>Cake Shop</p>
        <p>Rating: 4.5</p>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        <div className="restaurant-card">
          <Rest_card />
          <Rest_card />
          <Rest_card />
          <Rest_card />
        </div>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = REACTDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
