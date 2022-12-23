import VillagerCard from "../VillagerCard/VillagerCard"

export default function VillagersList({ villagers, user }) {
    return (
        <>
            {villagers ?
                <div>
                    <h1>Villagers List</h1>
                    {Object.keys(villagers).map(function (key, index) {
                        return (
                            <VillagerCard key={index} user={user} villager={villagers[key]} />
                        )
                    })
                    }
                </div>
                : <><VillagerCard /></>
            }</>
    )
}