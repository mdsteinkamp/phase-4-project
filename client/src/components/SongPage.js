import { useContext } from "react"
import { UserContext } from "./UserContext"
import { useParams } from "react-router-dom"
import ChordCard from "./ChordCard"

export default function SongPage() {
  const {user, setUser} = useContext(UserContext)
  const { id } = useParams()

  if (!user) return <h1>loading data...</h1>

  const song = user.chords.find(chord => chord.song.id === parseInt(id)).song
  const chords = user.chords.filter(chord => chord.song.title === song.title)


  return (
    <div>
      <h1>{song.title}</h1>
      by
      <h2>{song.artist}</h2>
      <h2>Structure: {song.structure}</h2>
      <ul>{chords.map(chord => (
          <ChordCard key={chord.id} chord={chord} />
          ))}
        </ul>
    </div>
  )
}