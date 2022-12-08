

export default function VillagerCard(villager) {
  return (
    <div>
      <p>Villager: {villager.name}</p>
      <p>Birthday: {villager.birthday}</p>
      <p>Species: {villager.species}</p>
      <p>Catch phrase: {villager.catch-phrase}</p>
      <p>icon uri:{villager.icon_uri}</p>
      <p>photo: {villager.image_uri}</p>
    </div>
  )
}