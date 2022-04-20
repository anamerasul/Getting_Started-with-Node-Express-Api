
import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [users, setUser] = useState([])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`

    const url2 = `http://localhost:5000/users`

    fetch(url2)
      .then(res => res.json())
      .then(data => setUser(data))



  }, [])
  return (
    <div className="App">
      <h1>My own data {users.length}</h1>

      {
        users.map(user => <li key={user.id}>{user.name}</li>)
      }
    </div>
  );
}

export default App;
