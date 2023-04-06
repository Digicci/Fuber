import React, { useState } from "react";
import DashCard from "../DashCard";
import Dash from "../../../utils/Data/Partner/Dash";
import {
    Row
} from "../../../utils/Atoms"
import { useAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";
import { useStats } from "../../../utils/hook/Partner/useStats";
import courbe from "../../../assets/driver/courbe.webp";
import team from "../../../assets/driver/team.webp";
import order from "../../../assets/driver/order.webp";

function DashCards() {

    const auth = useAuthEntreprise()
    const stats = useStats()
    const [data, setData] = useState(Dash)
    const teamCard = {
        id: 5,
        to: "/partner/account/team",
        title: "Team",
        imgInfo: {
            img: team,
            alt: "Team",
        },
        descriptionInfo: {
            info: `${auth.entreprise.employes?.length} chauffeurs`
        },
    }

    const financeCard = {
        id: 1,
        to: "../../../pages/Partner/finances",
        title: "Finances",
        imgInfo: {
            img: courbe,
            alt: "Courbe de progression",
        },
        descriptionInfo: {
            info: `${(stats.ca / 100).toFixed(2)}€`,
        },
    }

    const raceCard = {
        id: 2,
        to: "../../../pages/Partner/races",
        title: "Nombre de courses",
        imgInfo: {
            img: order,
            alt: "Nombre de courses",
        },
        descriptionInfo: {
            info:  stats.numberOfRace,
        },
    }

    return (
        <>
            <Row $col>
                {
                    data.map((card) => {
                        return <DashCard key={card.id} {...card} />
                        
                    })
                }
                <DashCard key="1" {...financeCard} />
                <DashCard key="2" {...raceCard} />
                <DashCard key="5" {...teamCard} />
            </Row>
        </>
    )
}

export default DashCards
