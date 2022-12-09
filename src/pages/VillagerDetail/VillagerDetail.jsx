import VillagersList from "../../components/VillagersList/VillagersList";

export default function VillagerDetails({ villager }) {
    return (
        <div>
            <p>Birthday: {villager.birthday}</p>
            <p>Species: {villager.species}</p>
            <img src={villager.image_uri} />
        </div>

    )
}