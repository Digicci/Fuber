
import {Cards} from "./atoms";
import InfoDetails from "../InfoDetails";

function InfoDetail({driver}){
    const data = [
        {
            id: 1,
            icon: "ph-bold ph-flag-checkered",
            info : driver?.courses?.length || 0
        },
        {
            id: 2,
            icon: "ph-bold ph-bank",
            info : (driver?.courses?.reduce((acc, item) => {
                return acc + (item.driverPrice / 100)
            }, 0) || 0) + "€"
        },
        {
            id: 3,
            icon:"ph-bold ph-taxi",
            info : (driver?.vehicule?.marque || "Aucun") + " " + (driver?.vehicule?.modele || "véhicule")
        },
    ]

    return(
        <>
            <Cards>
                {
                    data.map((card) => {
                        return <InfoDetails key={card.id} {...card} />
                    })
                }
            </Cards>
        </>
    )
}
export default InfoDetail;