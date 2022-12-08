import VillagerCard from "../VillagerCard/VillagerCard"

export default function VillagersList({ villagers }) {
    // const list = villagers.map((villager)=>{
    //     return (<VillagerCard villager={villager} />)})
    // console.log(villagers)
    return (
        <>
            {villagers ?
                <div>

                    <h1>Villagers List</h1>

                    {Object.keys(villagers).map(function (key, index) {
                        // console.log(villagers[key].name["name-USen"])
                        return (

                            VillagerCard(villagers[key])

                        )
                    })
                    }

                </div>
                : <><VillagerCard /></>

            }</>
    )
}