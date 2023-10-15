import { useContext } from "react"
import { UserContext } from "./UserContext"
import { useParams } from "react-router-dom"
import ChordPage from "./ChordPage"

export default function SongPage() {
  const {user, setUser} = useContext(UserContext)
  const { id } = useParams()

  if (!user) return <h1>loading data...</h1>

  const song = user.chords.find(chord => chord.song.id === parseInt(id)).song
  const chords = user.chords.filter(chord => chord.song.title === song.title)
  console.log(song, chords)


  return (
    <div>
      <h1>song page here</h1>
      <h3>{song.title}</h3>
      <h2>Structure: {song.structure}</h2>
      <ul>{chords.map(chord => (
          <ChordPage key={chord.id} chord={chord} />
          ))}
        </ul>
    </div>
  )
}


// <ul>{uniqueSongs.map(song => (
//   <ul key={song.id}>
//     <h3>{song.title}</h3>
//     <h2>Structure: {song.structure}</h2>
//   </ul>))}
// </ul>