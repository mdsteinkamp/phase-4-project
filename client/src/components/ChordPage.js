import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

export default function ChordPage({ chord }) {
  const {user, setUser} = useContext(UserContext)
  const [editChord, setEditChord] = useState(false)
  const [chordFormData, setChordFormData] = useState({
    name: chord.name,
    notes: chord.notes,
    inversion: chord.inversion,
    comments: chord.comments,
    image_url: chord.image_url,
    user_id: chord.user_id,
    song_id: chord.song_id
  })

  if (!user) return <h1>loading data...</h1>

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setChordFormData({
      ...chordFormData,
      [name]: value,
    })
  }

  function handleChordEditSubmit(e) {
    e.preventDefault()
    console.log(chordFormData)
  }

  function handleDeleteClick() {
    console.log(chord.id)
    fetch(`chords/${chord.id}`, {
      method: "DELETE",
    })
    const updatedChords = user.chords.filter(arrayChord => arrayChord.id !== chord.id)
    console.log(updatedChords)
    const updatedUser = {...user, chords: updatedChords}
    setUser(updatedUser)
    console.log(updatedUser)
  }

  function handleEditChord() {
    setEditChord(!editChord)
  }

  return (

    <>
      <h1 key={chord.id}>{chord.name}</h1>
      <h3>Notes: {chord.notes}</h3>
      <h3>Inversion: {chord.inversion}</h3>
      <p>Notes: {chord.comments}</p>
      <br />
      <button onClick={handleEditChord}>Edit Chord</button>
      <div>
        {!editChord ? null : 
          <form onSubmit={handleChordEditSubmit}>
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
            <button>Update</button>
          </form>
        }
      </div>
      <br />
      <button onClick={handleDeleteClick}>RemoveChord</button>
    </>
  )
}

// .then((resp) => {
//   if (resp.ok) {
//     resp.json().then((user) => {
//     setUser(user)
//     navigate("/chords")
//   })}
// })