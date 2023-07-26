import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNumberOfRace, getCa } from "../../../utils/store/Partner/selectors/StatsSelector";
import { getAuth } from "../../../utils/store/Partner/selectors/AuthSelectors";
import { updateStats } from "../../../utils/store/Partner/actions/StatActions";
import DashCard from "../DashCard";
import {
    Row
} from "../../../utils/Atoms"
import { useAuthEntreprise } from "../../../utils/hook/Partner/useAuthEntreprise";
import courbe from "../../../assets/driver/courbe.webp";
import team from "../../../assets/driver/team.webp";
import order from "../../../assets/driver/order.webp";
import {useAxios} from "../../../utils/hook/useAxios";
import params from "../../../assets/driver/etablishement.webp";

function DashCards() {

    const axios = useAxios()
    const auth = useSelector(getAuth)
    const numberOfRace = useSelector(getNumberOfRace)
    const ca = useSelector(getCa)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateStats(axios))
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
        to: "../../../partner/account/finances",
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
        to: "../../../pages/Partner/races",
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
        to: "../../../partner/account/profile",
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
