import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { getNumberOfRace, getCa } from "../../../utils/store/Partner/selectors/StatsSelector";
import { getAuth } from "../../../utils/store/Partner/selectors/AuthSelectors";
import DashCard from "../DashCard";
import {
    Row
} from "../../../utils/Atoms"
import courbe from "../../../assets/driver/courbe.webp";
import team from "../../../assets/driver/team.webp";
import order from "../../../assets/driver/order.webp";
import params from "../../../assets/driver/etablishement.webp";
import {useStats} from "../../../utils/hook/Partner/useStats";

function DashCards() {

    const {getStats} = useStats()
    const auth = useSelector(getAuth)
    const numberOfRace = useSelector(getNumberOfRace)
    const ca = useSelector(getCa)

    useEffect(() => {
        getStats()
    }, [])

    const teamCard = {
        id: 5,
        to: "/partner/account/team",
        title: "Team",
        imgInfo: {
            img: team,
            alt: "Team",
        },
        descriptionInfo: {
            info: `${auth.user.employes?.length} chauffeurs`
        },
    }

    const financeCard = {
        id: 1,
        to: "/partner/account/finances",
        title: "Finances",
        imgInfo: {
            img: courbe,
            alt: "Courbe de progression",
        },
        descriptionInfo: {
            info: `${(ca / 100).toFixed(2)}€`,
        },
    }

    const raceCard = {
        id: 2,
        to: "/partner/account/races",
        title: "Nombre de courses",
        imgInfo: {
            img: order,
            alt: "Nombre de courses",
        },
        descriptionInfo: {
            info:  numberOfRace,
        },
    }
    const profileCard = {
        id: 4,
        to: "/partner/account/profile",
        title: "Profile",
        imgInfo: {
            img: params,
            alt: "Profile",
        },
        descriptionInfo: {
            info: "Voir mon profil",
        },
    }

    return (
        <>
            <Row $col>

                <DashCard key="1" {...financeCard} />
                <DashCard key="2" {...raceCard} />
                <DashCard key="5" {...teamCard} />
                <DashCard key="4" {...profileCard} />
            </Row>
        </>
    )
}

export default DashCards