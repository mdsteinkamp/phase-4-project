import { Route, Routes, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./UserContext"
import '../App.css'
import NavBar from "./NavBar"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import ChordsList from "./ChordsList"
import ChordDetailPage from "./ChordDetailPage"
import SongsList from "./SongsList"

export default function App() {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  // console.log(user)

  function handleLogout() {
    fetch(("/logout"), {
      method: "DELETE",
    })
    .then(setUser(null))
    .then(navigate("/"))
  }

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chords" element={<ChordsList />} />
          <Route path="/chords/:id" element={<ChordDetailPage />} />
          <Route path="/songs" element={<SongsList />} />
        </Routes>
        {user ? <button onClick={handleLogout}>Log Out</button> : null}
    </div>
  );
}
