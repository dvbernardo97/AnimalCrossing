import React, { useState, useEffect } from 'react'
import VillagersList from '../../components/VillagersList/VillagersList'

export default function Home({ user }) {
  const [villagers, setVillagers] = useState([])
  useEffect(() => {
    const fetchVillagers = async () => {
      const items = await fetch(`http://acnhapi.com/v1/villagers/`)
        .then(res => res.json())
      setVillagers(items)
    }
    fetchVillagers()
  }, [])

  
  return (
    <div>
      <VillagersList user={user} villagers={villagers} />
    </div>
  );
}
