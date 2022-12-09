import { Link } from "react-router-dom"
import VillagerDetails from "../../pages/VillagerDetail/VillagerDetail"
import { useState } from "react"


export default function VillagerCard({ villager, user }) {
  const [newFavorite, setNewfavorite] = useState({ favoritedVillager: "" })

  const handleClick = async () => {
    console.log(villager.name["name-USen"])
    let newFavorite = {
      favoritedVillager: villager.name["name-USen"],
    }

    const res = await fetch(`/api/villagers/${user._id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFavorite)
    })
    // res.json()
    console.log(res.data)
  }
  return (
    <div>
      <Link to="/VillagerDetails/">Villager: {villager.name["name-USen"]}</Link>
      <img src={villager.icon_uri} />
      <button className="button" onClick={handleClick}>Favorites</button>

    </div>
  )
}