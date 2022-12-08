// import VillagerCard from "../VillagerCard/VillagerCard"

export default function VillagersList({villagers}){
    // const list = villagers.map((villager)=>{
    //     return (<VillagerCard villager={villager} />)})
    return(
        <div>
            <h1>Villagers List</h1>
            <p>{villagers.personality}</p>
        </div>
    )
}