import './App.css';
import { useEffect, useState } from 'react';

const getUser = async () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());
};

const ShowUsers = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.email} {user.username}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser().then(usersData => setUsers(usersData));
  }, []);



  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      <ShowUsers users={users} />
    </div>
  );
}

export default App;