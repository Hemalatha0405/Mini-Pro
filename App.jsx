// App.jsx
import { Routes, Route } from 'react-router-dom';
import Login from './ProjectSrc/login';
import User from './ProjectSrc/user';
import Register from './ProjectSrc/register';
import UserDetails from './ProjectSrc/userdetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/user" element={<User />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<User />} />
      <Route path="/userdetails" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
