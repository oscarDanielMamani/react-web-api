
import {NavLink} from 'react-router-dom';

function NavBar(){
  return(
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about" activeClassName="activeLink">About</NavLink>
      </li>

      <li>
        <NavLink to="/contact" activeClassName="activeLink">Contact</NavLink>
      </li>

      <li>
        <NavLink to="/api" activeClassName="activeLink">ApiComponent</NavLink>
      </li>
    </ul>
  )
}

export default NavBar;