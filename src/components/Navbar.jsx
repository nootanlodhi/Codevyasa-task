import { Avatar, IconButton } from "@mui/material";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Products</h1>
      <div className="left-nav">
        <FaRegBell />
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s"/>
          <select>
            <option>aaaaaa</option>
            <option>aaaaaa</option>
            <option>aaaaaa</option>
            <option>aaaaaa</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
