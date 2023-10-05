import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function ChordPage({ chord }) {
  const {user, setUser} = useContext(UserContext)
  // console.log(user)

  if (!user) return <h1>loading data...</h1>

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

  return (

    <>
    <h1 key={chord.id}>{chord.name}</h1>
    <h3>Notes: {chord.notes}</h3>
    <h3>Inversion: {chord.inversion}</h3>
    <p>Notes: {chord.comments}</p>
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