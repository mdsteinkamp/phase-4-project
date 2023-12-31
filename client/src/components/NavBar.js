import { NavLink } from "react-router-dom";

export default function NavBar() {

  return (
    <span className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chords">Chords</NavLink>
      <NavLink to="/chords/new">Add Chord</NavLink>
      <NavLink to="/songs">Your Songs</NavLink>
    </span>
  )
}
