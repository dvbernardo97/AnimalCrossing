import React, { useState, useEffect } from 'react'
import VillagersList from '../../components/VillagersList/VillagersList'

const Home = () => {
  const [villagers, setVillagers] = useState([])
  useEffect(() => {
    const fetchVillagers = async () => {
      const items = await fetch(`http://acnhapi.com/v1/villagers/`)
        .then(res => res.json())
      setVillagers(items)
    }
    fetchVillagers()
    console.log('so fetch')
  }, [])


  return (
    <div>
      <VillagersList villagers={villagers} />
    </div>
  );
}

export default Home