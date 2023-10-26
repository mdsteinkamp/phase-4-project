import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { useParams, useNavigate } from "react-router-dom"
import EditChordPage from "./EditChordPage"

export default function ChordDetailPage() {
  const {user, setUser} = useContext(UserContext)
  // const [currentChord, setCurrentChord] = useState(null)
  const [editChord, setEditChord] = useState(false)
  const [editedChord, setEditedChord] = useState(null)
  const [errors, setErrors] = useState([])
  const [chordUpdated, setChordUpdated] = useState(false)
  const [chordDeleted, setChordDeleted] = useState(false)
  const { id } = useParams()
  const [paramsId, setparamsId] = useState(id)
  const navigate = useNavigate()

  if (!user) return <h1>loading data...</h1>

  const chord = user.chords.find(chord => chord.id === parseInt(paramsId))

  // const [chordFormData, setChordFormData] = useState({
  //   id: chord.id,
  //   name: chord.name,
  //   notes: chord.notes,
  //   song: chord.song,
  //   inversion: chord.inversion,
  //   comments: chord.comments,
  //   image_url: chord.image_url,
  //   user_id: chord.user_id,
  //   song_id: chord.song_id
  // })

  console.log(user)

  // function handleChange(e) {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setChordFormData({
  //     ...chordFormData,
  //     [name]: value,
  //   })
  // }

  function handleTransferChord(editedChord) {
    console.log(editedChord)
    setEditedChord(editedChord)
    handleUpdateChord(editedChord)
  }

  function handleUpdateChord(editedChord) {
    fetch(`/chords/${chord.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedChord)
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((newChord) => {
          console.log(newChord)
          const newChords = user.chords.map(chord => chord.id === newChord.id ? newChord : chord)
          console.log(newChords)
          const udpatedUser = {...user, chords: newChords}
          console.log(udpatedUser)
          setUser(udpatedUser)
          setChordUpdated(true)
          setErrors([])
        })
      } else {
        resp.json().then(e => setErrors(e.errors))      
      }
    })
  }

  function handleDeleteClick() {
    console.log(chord.id)
    fetch(`${chord.id}`, {
      method: "DELETE",
    })
    .then(resp => console.log(resp))
    const updatedChords = user.chords.filter(arrayChord => arrayChord.id !== chord.id)
    let updatedUserSongs = updatedChords.map(chord => chord.song)
    // updatedUserSongs = [...new Set(updatedUserSongs)]
    const newUserSongs = []
    for (const song of updatedUserSongs) {
      if (newUserSongs.map(song => song.id).includes(song.id)) {
      } else {newUserSongs.push(song)}
    }
    const updatedUser = {...user, chords: updatedChords, user_songs: newUserSongs}
    setUser(updatedUser)
    setChordDeleted(true)
    navigate('/chords')
  }

  return (
    <>
      <h3>View, Edit, Delete the Chord Here</h3>
      <h1 key={chord.id}>{chord.name}</h1>
      <h3>Notes: {chord.notes}</h3>
      <h3>Inversion: {chord.inversion}</h3>
      <p>Notes: {chord.comments}</p>
      <br />
      <button onClick={() => setEditChord(!editChord)}>Edit Chord</button>
      <div>
        {!editChord ? null : <EditChordPage chord={chord} onUpdateChord={handleTransferChord}/>}
      </div>

      <button onClick={handleDeleteClick}>RemoveChord</button>
        {chordUpdated === false ? null : <h3>Chord Updated!</h3>}
        {chordDeleted === false ? null : <h3>Chord Deleted!</h3>}
        {errors === [] ? null : <ul>{errors.map(e => (
            <ul key={e}>
              <h3>{e}</h3>
            </ul>))}
            </ul>}
  </>
  )
}