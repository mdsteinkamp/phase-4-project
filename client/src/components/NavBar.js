import { NavLink } from "react-router-dom";

export default function NavBar() {

  return (
    <span className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/songs">Songs</NavLink>
    </span>
  )
}
