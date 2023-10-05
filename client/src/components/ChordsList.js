import { useContext } from "react"
import { UserContext } from "./UserContext"
import ChordPage from "./ChordPage"

export default function SongsList() {
  const {user} = useContext(UserContext)
  

  return (
    <div>
      <h1>Chords list comp</h1>
      {user ? 
      <>
        <h4>here are your chords</h4>
        <ul>{user.chords.map(chord => (
          <ChordPage key={chord.id} chord={chord} />
        ))}</ul>
      </>
      
      : <h4>Please log in!</h4>}
    </div>
  )
}
