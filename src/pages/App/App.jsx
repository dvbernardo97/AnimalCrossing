import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Home from '../home/Home'
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import { useEffect } from 'react';
import FavoriteVillager from '../../components/FavoriteVillagers/FavoriteVillagers';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<Home user={user} />} />
            <Route path="/favorites" element={<FavoriteVillager user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
