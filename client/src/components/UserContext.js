import { useState, useEffect, createContext } from "react"

const UserContext = createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);



  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }

// useEffect(() => {
//   fetch("/me")
//   .then((resp) => {
//     if (resp.ok) {
//       resp.json().then((user) => setUser())
//     }
//   })
// }, [])