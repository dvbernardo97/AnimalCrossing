import { useState, useEffect } from "react"
import sendRequest from "../../utilities/send-request"

function FavoriteVillager({ user }) {
    const [newFavorites, setNewFavorites] = useState([])

    useEffect(function () {
        async function getFavorites() {
            const response = await sendRequest(`/api/villagers/${user._id}`)
            console.log(response.favorites)
            setNewFavorites(response.favorites)
        }
        getFavorites()
    }, [])

    return (

        <div>
            {newFavorites.map((villager, i) =>
                // console.log(villager)
                <p>Name:{villager.favoritedVillager}</p>
            )}

        </div>
    )
}

export default FavoriteVillager