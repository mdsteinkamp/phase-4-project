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

  if (!user) return <h1>loading data...</h1>

  console.log(user)

  const uniqueChords = [...new Map(user.chords.map(chord => [chord.song.id, chord])).values()]
  const uniqueSongs = uniqueChords.map(chord => chord.song)
  console.log(uniqueSongs)
  // const uniques = [...new Set(uniqueSongs.map(item => item))]
  // console.log(uniques)


  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
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
            type="ted"
            name="image_url"
            placeholder="Image URL"
            value={chordFormData.image}
            onChange={handleChange}
          />
          <br />
          <button>Add</button>
        </form>
    </>
  )
}