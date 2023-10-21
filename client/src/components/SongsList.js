import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { NavLink } from "react-router-dom"
import SongPage from "./SongPage"

export default function SongsList({ songs, onAddSong }) {
  const {user} = useContext(UserContext)
  const [addSongForm, setAddSongForm] = useState(false)
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    structure: ""
  })
  if (!user) return <h1>Please log in!</h1>

  const allSongs = user.chords.map(chord => chord.song)

  const uniqueSongs = []
  for (const newSong of allSongs) {
    if (uniqueSongs.map(song => song.id).includes(newSong.id)) {
    } else {uniqueSongs.push(newSong)}
  }

  function handleNewSong(song) {
    onAddSong(song)
  }

  console.log(uniqueSongs)

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
        })
      } else {
        resp.json().then(e => setErrors(e.errors))
      }
    })
  }

  // resp.json().then((newChord) => {
  //   const newChords = user.chords.map(chord => chord.id === newChord.id? chordFormData : chord)
  //   const udpatedUser = {...user, chords: newChords}
  //   setUser(udpatedUser)
  // })

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
      </div>
      <ul>{uniqueSongs.map(song => (
        <NavLink to={`/songs/${song.id}`} key={song.id}>{song.title}</NavLink>))}
      </ul>
      {errors === [] ? null : 
          <ul>{errors.map(e => (
            <ul key={e}>
              <h3>{e}</h3>
            </ul>))}
          </ul>
        }
    </>
  )
}


/* <ul>{sortedChords.map(chord => (
          <ChordPage key={chord.id} chord={chord} />
          ))} */
/* </ul> */