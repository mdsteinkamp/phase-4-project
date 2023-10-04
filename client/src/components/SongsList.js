import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function SongsList() {
  const {user, setUser} = useContext(UserContext)


  return (
    <div>
      <h1>songs list comp</h1>
      {user ? <h4>here are your songs</h4> : <h4>Please log in!</h4>}
    </div>
  )
}