import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleRegister = async () => {
    try {
      // Send a POST request to the server to register a new user
      await axios.post('http://localhost:3000/register', {
        username,
        password
      });

      alert('User registered');
    } catch (err) {
      console.log(err);
    }
  }
}

export default App;
