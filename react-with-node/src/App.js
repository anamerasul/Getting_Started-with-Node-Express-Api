
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

  const handleAdduser = (e) => {
    e.preventDefault()

    const name = e.target.name.value

    const email = e.target.email.value

    console.log(name, email)

    const user = { name, email }
    // post data to server

    fetch('http://localhost:5000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        const newUsers = [...users, data]
        setUser(newUsers)
        console.log('Success:', data);
      })
      .catch((error) => {

        console.error('Error:', error);
      });

  }
  return (
    <div className="App">
      <h1>My own data {users.length}</h1>

      {
        users.map(user => <li key={user.id}>{user.name}</li>)
      }

      <form onSubmit={handleAdduser} >

        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="submit" value="add user" />
      </form>
    </div>
  );
}

export default App;
