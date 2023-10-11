import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

export default function AddChord() {
  const {user} = useContext(UserContext)
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

  if (!user) return <h1>Please log in!</h1>

  console.log(user)
  console.log(user.chords.find(chord => chord.song.id === 1).song)

  const uniqueChords = [...new Map(user.chords.map(chord => [chord.song.id, chord])).values()]
  const uniqueSongs = uniqueChords.map(chord => chord.song)
  console.log(uniqueSongs)

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    if (name === "song_id") {setSongId(value)}
    console.log(songId)
    setChordFormData({
      ...chordFormData,
      [name]: value,

    })
  }


  function handleAddChord(e) {
    e.preventDefault()
    console.log(chordFormData)
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
          console.log(newChord)
        })
      } else {
        resp.json().then(e => console.log(e.errors))
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
          <input
            type="text"
            name="inversion"
            placeholder="Inverted Chord?"
            value={chordFormData.inversion}
            onChange={handleChange}
          />            
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
            {uniqueSongs.map((song, index) => <option key={song.id} value={song.id}>{song.title}</option>)}
          </select>
          <br />
          <button>Add</button>
        </form>
    </>
  )
}

{/* <select name="song_id" onChange={handleChange}>
<option value="" hidden>Choose Song</option>
<option value="1">{uniqueSongs[0].title}</option>
</select> */}