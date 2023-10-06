import { useContext } from "react"
import { UserContext } from "./UserContext"
import ChordPage from "./ChordPage"

export default function SongsList() {
  const {user} = useContext(UserContext)
  console.log(user)

  if (!user) return <h1>loading data...</h1>

  const sortedChords = user.chords.sort((a, b) => a.id - b.id)

  return (
    <div>
      <h1>Chords list comp</h1>
      {user ? 
      <>
        <h4>here are your chords</h4>
        <ul>{sortedChords.map(chord => (
          <ChordPage key={chord.id} chord={chord} />
        ))}</ul>
      </>
      
      : <h4>Please log in!</h4>}
    </div>
  )
}