import { useContext, useState, useEffect } from "react"
import { UserContext } from "./UserContext"

export default function AddChord({ songs }) {
  const {user, setUser} = useContext(UserContext)
  const [chordFormData, setChordFormData] = useState({
    name: "",
    notes: "",
    song: "",
    inversion: "",
    comments: "",
    image_url: "",
    user_id: "",
    song_id: ""
  })
  const [songId, setSongId] = useState(null)
  const [errors, setErrors] = useState([])
  const [chordAdded, setChordAdded] = useState(false)
  const [chosenSong, setChosenSong] = useState(null)

  if (!user) return <h1>Please log in!</h1>

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    if (name === "song_id") {setSongId(value)}
    setChordFormData({
      ...chordFormData,
      [name]: value,
      user_id: user.id
    })
  }
  
  function handleAddChord(e) {
    e.preventDefault()
    fetch(`/chords`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chordFormData)
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((newChord) => {
          const newChords = [...user.chords, newChord]
          const selectedSong = songs.find(song => song.id === parseInt(songId))
          delete selectedSong.chords
          let newUserSongs = [...user.user_songs]
          const hasSong = newUserSongs.filter(song => song.id === selectedSong.id)
          if (hasSong.length === 0) {
            newUserSongs.push(selectedSong)
          }
          const udpatedUser = {...user, chords: newChords, user_songs: newUserSongs}
          setUser(udpatedUser)
          setChordAdded(true)
          setErrors([])
        })
      } else {
        resp.json().then(e => {
          setErrors(e.errors)
        })
      }
    })
  }

  return (
    <>
      <h2>add chord here</h2>
        <form onSubmit={handleAddChord}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={chordFormData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="notes"
            placeholder="Notes in Chord"
            value={chordFormData.notes}
            onChange={handleChange}
          />
          <select name="inversion" onChange={handleChange}>
            <option value="" hidden>Select Inversion</option>
            <option value="root_position">Root Position</option>
            <option value="first_inversion">First Inversion</option>
            <option value="second_inversion">Second Inversion</option>
            <option value="third_inversion">Third Inversion</option>
          </select>
          <input
            type="text"
            name="comments"
            placeholder="Comments"
            value={chordFormData.comments}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={chordFormData.image}
            onChange={handleChange}
          />
          <select name="song_id" onChange={handleChange}>
            <option value="" hidden>Choose Song</option>
            {songs.map((song, index) => <option key={song.id} value={song.id}>{song.title}</option>)}
          </select>
          <br />
          <button>Add</button>
          </form>
        {chordAdded === false ? null : <h3>Chord Added!</h3>}
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