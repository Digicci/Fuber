import courbe from "../../../assets/driver/courbe.webp";
import order from "../../../assets/driver/order.webp";
import params from "../../../assets/driver/etablishement.webp";
import team from "../../../assets/driver/team.webp";

const Dash = [
    {
        id: 1,
        to: "../../../pages/Partner/Finances",
        title: "Finances",
        imgInfo: {
            img: courbe,
            alt: "Courbe de progression",
        },
        descriptionInfo: {
            info: "1000€",
        },
    },
    {
        id: 2,
        to: "../../../pages/Partner/Races",
        title: "Nombre de courses",
        imgInfo: {
            img: order,
            alt: "Nombre de courses",
        },
        descriptionInfo: {
            info: "100",
        },
    },
    {
        id: 3,
        to: "../../../pages/Partner/Team",
        title: "Team",
        imgInfo: {
            img: team,
            alt: "Team",
        },
        descriptionInfo: {
            info: "10 chauffeurs",
        },
    },
    {
        id: 4,
        to: "../../../pages/Partner/ProfilDash",
        title: "Profile",
        imgInfo: {
            img: params,
            alt: "Profile",
        },
        descriptionInfo: {
            info: "Voir mon profil",
        },
    }
]

export default Dash;