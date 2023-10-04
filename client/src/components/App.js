import { Route, Routes } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./UserContext"
import '../App.css'
import NavBar from "./NavBar"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import SongsList from "./SongsList"

export default function App() {
  const {user, setUser} = useContext(UserContext)

  function handleLogout() {
    fetch(("/logout"), {
      method: "DELETE",
    })
    .then(setUser(null))
  }

  // .then((resp) => {
  //   if (resp.ok) {
  //     resp.json().then((user) => {
  //     setUser(user)
  //     navigate("/songs")
  //   })}
  // })

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/songs" element={<SongsList />} />
        </Routes>
        {user ? <button onClick={handleLogout}>Log Out</button> : null}
    </div>
  );
}
