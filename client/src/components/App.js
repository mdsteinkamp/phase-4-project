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

  console.log(user)
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}
