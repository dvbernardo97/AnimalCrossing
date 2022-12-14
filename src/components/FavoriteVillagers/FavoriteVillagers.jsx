import { useState, useEffect } from "react"
import sendRequest from "../../utilities/send-request"
import * as villagersAPI from "../../utilities/villagers-api"

function FavoriteVillager({ user }) {
    const [newFavorites, setNewFavorites] = useState([])

    useEffect(function () {
        async function getFavorites() {
            const res = await villagersAPI.getFavorites(user._id)
            console.log(res.favorites)
            // .then(res => console.log(res))
            setNewFavorites(res.favorites)
        }
        getFavorites()
    }, [])

    async function handleDelete(event) {
        event.preventDefault()
        let id = event.target.className
        console.log(id)
        const deleteFave = await villagersAPI.deleteFavorite(id)
        // console.log(newFavorites[id])
        // id = newFavorites[id]._id
        // console.log(id)
        // const res = await fetch(`/api/villagers/delete/${id}`,
        //     { method: "DELETE" })
        //     .then(res => res.json())
        //     .catch(err => console.log(err))
        // console.log(res)
        console.log("click")
    }
    return (

        <div>
            {newFavorites.map((villager, i) =>
                <div>
                    <p>Name: {villager.favoritedVillager}</p>
                    <button className={i} onClick={handleDelete}>X</button>
                </div>
            )}

        </div>
    )
}

export default FavoriteVillager