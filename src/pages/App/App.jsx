import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Home from '../home/Home'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState(getUser());
  // const [villagers, setVillagers] = useState(null)
  // const [newVillager, setNewVillager] = useState('Goldie')


  // useEffect(function () {
  //   async function getVillagers() {
  //     const URL = `http://acnhapi.com/v1/villagers/${newVillager}`;
  //       await fetch(URL, {
  //         method: 'POST'
  //       }).then(response => response.json())
  //         .then(json => setVillagers(json))
  //         .catch(err => console.error(err))
  //   }
  //   getVillagers()
  // }, [])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
