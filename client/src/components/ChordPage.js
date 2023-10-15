import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "./UserContext"

export default function ChordPage({ chord }) {
  const {user} = useContext(UserContext)

  if (!user) return <h1>loading data...</h1>

  return (

    <div className="row">
      <div className="column">
        <div className="card">
          <h1 key={chord.id}>{chord.name}</h1>
          <h3>{chord.song.title} - {chord.song.artist}</h3>
          <NavLink to={`/chords/${chord.id}`}>See Chord Details</NavLink>
        </div>
      </div>
    </div>
  )
}