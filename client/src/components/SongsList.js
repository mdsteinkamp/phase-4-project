import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

export default function SongsList() {
  const {user} = useContext(UserContext)
  const [addSongForm, setAddSongForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    structure: ""
  })
  console.log(user)
  console.log(addSongForm)
  if (!user) return <h1>Please log in!</h1>

  const allSongs = user.chords.map(chord => chord.song)

  const uniqueSongs = []
  for (const newSong of allSongs) {
    if (uniqueSongs.map(song => song.id).includes(newSong.id)) {
    } else {uniqueSongs.push(newSong)}
  }

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleAddSong(e) {
    e.preventDefault()
    fetch("/songs", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((newSong) => {
          console.log(newSong)
        })
      } else {
        resp.json().then(e => console.log(e.errors))
      }
    })
  }

  // resp.json().then((newChord) => {
  //   const newChords = user.chords.map(chord => chord.id === newChord.id? chordFormData : chord)
  //   const udpatedUser = {...user, chords: newChords}
  //   setUser(udpatedUser)
  // })

  return (
    <>
    <br />
    <br />
      <button onClick={() => setAddSongForm(!addSongForm)}>Add a Song</button>
      <div>
        {!addSongForm ? null : 
          <form onSubmit={handleAddSong}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="artist"
              placeholder="Artist"
              value={formData.artist}
              onChange={handleChange}
            />
            <input
              type="text"
              name="structure"
              placeholder="Song Structure?"
              value={formData.structure}
              onChange={handleChange}
            />         
            <br />
            <button>Add Song!</button>
          </form>
        }
      </div>
      <ul>{uniqueSongs.map(song => (
        <ul key={song.id}>
          <h3>{song.title}</h3>
          <h2>Structure: {song.structure}</h2>
        </ul>))}
      </ul>

    </>
  )
}


/* <ul>{sortedChords.map(chord => (
          <ChordPage key={chord.id} chord={chord} />
          ))} */
/* </ul> */