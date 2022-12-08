

export default function VillagerCard({ villager }) {
  return (
    <div>
      <p>Villager: {villager.name["name-USen"]}</p>
      <p>Birthday: {villager.birthday}</p>
      <p>Species: {villager.species}</p>
      <img src={villager.icon_uri} />
      <img src={villager.image_uri}/>
    </div>
  )
}