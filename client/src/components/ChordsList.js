import { useContext } from "react"
import { UserContext } from "./UserContext"
import ChordPage from "./ChordCard"

export default function SongsList() {
  const {user} = useContext(UserContext)

  if (!user) return <h1>Please log in!</h1>

  const sortedChords = user.chords.sort((a, b) => a.id - b.id)

  return (
    <div>
      <h1>Chords list comp</h1>
      <h4>here are your chords</h4>
        <ul>{sortedChords.map(chord => (
          <ChordPage key={chord.id} chord={chord} />
          ))}
        </ul>
    </div>
  )
}
