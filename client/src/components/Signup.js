import { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import { useNavigate } from "react-router-dom"

export default function Signup({ onSignup }){
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: ""
  })
  const {setUser} = useContext(UserContext)

  const navigate = useNavigate()

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
        navigate("/chords")
      } else {
        resp.json().then(e => console.log(e.errors))
      }
    });
  }

  return (
    <div>
    <h1>Signup Here</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="passwordConfirmation"
        placeholder="Confirm Password"
        value={formData.passwordConfirmation}
        onChange={handleChange}
      />
      <br />
      <button>Login</button>
    </form>
  </div>
  )


}