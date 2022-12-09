import { Link } from "react-router-dom"
import VillagerDetails from "../../pages/VillagerDetail/VillagerDetail"

export default function VillagerCard({ villager, user }) {

  const handleClick = async () => {
    let newFavorite = {
      favoriteVillager: villager.name["name-USen"],
    }

    await fetch(`/api/villagers/${user._id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFavorite)
    })
    console.log(newFavorite)
  }
  return (
    <div>
      <Link to="/VillagerDetails/">Villager: {villager.name["name-USen"]}</Link>
      <img src={villager.icon_uri} />
      <button className="button" onClick={handleClick}>Favorites</button>

    </div>
  )
}