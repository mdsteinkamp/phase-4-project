import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "./UserContext"

export default function ChordPage({ chord }) {
  const {user} = useContext(UserContext)

  if (!user) return <h1>loading data...</h1>

  return (

    <>
      <h1 key={chord.id}>{chord.name}</h1>
      <h3>{chord.song.title} - {chord.song.artist}</h3>
      <NavLink to={`/chords/${chord.id}`}>See Chord Details</NavLink>

      <br />
    </>
  )
}