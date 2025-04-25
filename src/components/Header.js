import { LOGO_URL } from "../utils/constants";

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
          <button
            className="login"
            onClick={() => {
              console.log("Login button clicked");
            }}
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
