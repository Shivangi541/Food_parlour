import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
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
              if (btnNameReact === "Login") {
                setBtnNameReact("Logout");
              } else {
                setBtnNameReact("Login");
              }

              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
