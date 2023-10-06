import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { useParams, useNavigate } from "react-router-dom"

export default function ChordDetailPage() {
  const {user, setUser} = useContext(UserContext)
  const [editChord, setEditChord] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const chord = user.chords.find(chord => chord.id === parseInt(id))


  const [chordFormData, setChordFormData] = useState({
    id: chord.id,
    name: chord.name,
    notes: chord.notes,
    song: chord.song,
    inversion: chord.inversion,
    comments: chord.comments,
    image_url: chord.image_url,
    user_id: chord.user_id,
    song_id: chord.song_id
  })

  console.log(chord)

  console.log(user)

  if (!user) return <h1>loading data...</h1>

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setChordFormData({
      ...chordFormData,
      [name]: value,
    })
  }

  function handleUpdateChord(e) {
    e.preventDefault()
    fetch(`${chord.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chordFormData)
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((newChord) => {
          const newChords = user.chords.map(chord => chord.id === newChord.id? chordFormData : chord)
          const udpatedUser = {...user, chords: newChords}
          setUser(udpatedUser)
        })
      } else {
        resp.json().then(e => console.log(e.errors))
      }
    })
  }

  function handleDeleteClick() {
    console.log(chord.id)
    fetch(`chords/${chord.id}`, {
      method: "DELETE",
    })
    const updatedChords = user.chords.filter(arrayChord => arrayChord.id !== chord.id)
    const updatedUser = {...user, chords: updatedChords}
    setUser(updatedUser)
    navigate('/chords')
  }

  function handleShowEditChordForm() {
    setEditChord(!editChord)
  }
  
  return (
    <>
      <h1>View, Edit, Delete the Chord Here</h1>
      <h1 key={chord.id}>{chord.name}</h1>
      <h3>Notes: {chord.notes}</h3>
      <h3>Inversion: {chord.inversion}</h3>
      <p>Notes: {chord.comments}</p>
      <br />
      <button onClick={handleShowEditChordForm}>Edit Chord</button>
      <div>
        {!editChord ? null : 
          <form onSubmit={handleUpdateChord}>
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