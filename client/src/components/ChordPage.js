import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
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
      <h3>{chord.song.title} - {chord.song.artist}</h3>
      <NavLink to={`/chords/${chord.id}`}>See Chord Details</NavLink>

      <br />
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