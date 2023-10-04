import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

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
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((resp) => resp.json())
    .then(user => console.log(user))
  }

  return (
    <div>
      <h1>login here</h1>
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
        <button>Login</button>
      </form>
      <h3>Not a member?</h3>
        <Link to="/signup">
          <button>Register Here</button>
        </Link>
    </div>
  )

  
}