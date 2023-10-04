import { Route, Routes } from "react-router-dom"
import { useContext } from "react"
import '../App.css'
import NavBar from "./NavBar"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import { UserContext } from "./UserContext"

export default function App() {
  const {user} = useContext(UserContext)

  
  return (
    <div className="App">
      if user <h1>{user}</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <h1>{user}</h1>
    </div>
  );
}
