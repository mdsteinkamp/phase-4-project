import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { NavLink } from "react-router-dom"

export default function SongsList({ songs, onAddSong }) {
  const {user} = useContext(UserContext)
  const [addSongForm, setAddSongForm] = useState(false)
  const [errors, setErrors] = useState([])
  const [songAdded, setSongAdded] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    structure: ""
  })
  if (!user) return <h1>Please log in!</h1>

  function handleNewSong(song) {
    onAddSong(song)
  }

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleAddSong(e) {
    e.preventDefault()
    fetch("/songs", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((newSong) => {
          handleNewSong(newSong)
          setSongAdded(true)

        })
      } else {
        resp.json().then(e => setErrors(e.errors))
      }
    })
  }

  return (
    <>
    <br />
    <br />
      <button onClick={() => setAddSongForm(!addSongForm)}>Add a Song</button>
      <div>
        {!addSongForm ? null : 
          <form onSubmit={handleAddSong}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="artist"
              placeholder="Artist"
              value={formData.artist}
              onChange={handleChange}
            />
            <input
              type="text"
              name="structure"
              placeholder="Song Structure?"
              value={formData.structure}
              onChange={handleChange}
            />         
            <br />
            <button>Add Song!</button>
          </form>
        }
        {songAdded === false ? null : <h3>Song Added!</h3>}
      </div>
      <ul>{user.user_songs.map(song => (
        <NavLink to={`/songs/${song.id}`} key={song.id}>{song.title}</NavLink>))}
      </ul>
      {errors.length > 0 && 
          <ul>{errors.map(e => (
            <ul key={e}>
              <h3>{e}</h3>
            </ul>))}
          </ul>
        }
    </>
  )
}