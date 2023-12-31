import { Route, Routes, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "./UserContext"
import '../App.css'
import Header from "./Header"
import NavBar from "./NavBar"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import ChordsList from "./ChordsList"
import ChordDetailPage from "./ChordDetailPage"
import SongsList from "./SongsList"
import AddChord from "./AddChord"
import SongPage from "./SongPage"

export default function App() {
  const {user, setUser} = useContext(UserContext)
  const [songs, setSongs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/songs')
    .then(resp => resp.json())
    .then(songs => setSongs(songs))
  }, [])

  function handleLogin() {
    navigate("/login")
  }

  function handleLogout() {
    fetch(("/logout"), {
      method: "DELETE",
    })
    .then(setUser(null))
    .then(navigate("/"))
  }

  function handleNewSong(song) {
    setSongs([...songs, song])
  }

  return (
    <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chords" element={<ChordsList />} />
          <Route path="/songs/:id/chords/:id" element={<ChordDetailPage />} />
          <Route path="/chords/new" element={<AddChord songs={songs}/>} />
          <Route path="/songs" element={<SongsList songs={songs} onAddSong={handleNewSong}/>} />
          <Route path="/songs/:id" element={<SongPage />} />
        </Routes>
        {user ? <button className="logoutButton" onClick={handleLogout}>Log Out</button> : <button className="logoutButton" onClick={handleLogin}>Log In/Register</button>}
    </div>
  );
}
