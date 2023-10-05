import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { useParams } from "react-router-dom"

export default function ChordDetailPage() {
  const {user, setUser} = useContext(UserContext)
  const { id } = useParams()
  console.log(user)

  if (!user) return <h1>loading data...</h1>
  
  const chord = user.chords.find(chord => chord.id === parseInt(id))
  console.log(chord)


  return (
    <h1>hello from chord deetz page</h1>
  )
}