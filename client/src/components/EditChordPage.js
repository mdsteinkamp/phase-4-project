import { useState } from "react"

export default function EditChordPage({ chord, onUpdateChord }) {

  const [chordFormData, setChordFormData] = useState({
    id: chord.id,
    name: chord.name,
    notes: chord.notes,
    song: chord.song,
    inversion: chord.inversion,
    comments: chord.comments,
    image_url: chord.image_url,
    user_id: chord.user_id,
    song_id: chord.song_id
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setChordFormData({
      ...chordFormData,
      [name]: value,
    })
  }

  function handleUpdateChord(e) {
    e.preventDefault()
    onUpdateChord(chordFormData)
  }

  return (
    <div>
      <form onSubmit={handleUpdateChord}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={chordFormData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="notes"
          placeholder="Notes in Chord"
          value={chordFormData.notes}
          onChange={handleChange}
        />
        <select name="inversion" onChange={handleChange}>
          <option value="" hidden>Select Inversion</option>
          <option value="root_position">Root Position</option>
          <option value="first_inversion">First Inversion</option>
          <option value="second_inversion">Second Inversion</option>
          <option value="third_inversion">Third Inversion</option>
        </select>
        <input
          type="text"
          name="comments"
          placeholder="Comments"
          value={chordFormData.comments}
          onChange={handleChange}
        />
        <input
          type="ted"
          name="image_url"
          placeholder="Image URL"
          value={chordFormData.image}
          onChange={handleChange}
        />
        <br />
        <button>Update</button>
      </form>
      </div>
  )
}