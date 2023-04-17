import React, {useState, useEffect} from "react";
import {
    Lien,
    DivDriver,
    DivImg,
    DivInfo,
    Text,
    Animation,
    Button
} from "./atoms";
import profile from "../../../assets/driver/drivercard.webp"
import DetailDriver from "../DetailDriver";
import { useStats } from "../../../utils/hook/Partner/useStats";

function DriverItem({item}) {

    const stats = useStats()
    const [isOpen, setIsOpen] = useState(false)
    const [numberOfRace, setNumberOfRace] = useState(0)
    const nom = item.nom
    const prenom = item.prenom
    const vehicule = item.vehicule

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        stats.getNumberOfRaceById(item.id).then((res) => {
            setNumberOfRace(res.data.count)
        })
    }, [])

  return (
    <>
        <Lien>
            <DivDriver>
                <DivImg>
                    <img src={profile} alt="Image de profile"/>
                </DivImg>
                <DivInfo>
                    <Text>
                        {nom} {prenom}
                    </Text>
                </DivInfo>
                <DivInfo>
                    <Text>
                        {vehicule.type.toUpperCase()}
                    </Text>
                </DivInfo>
                <DivInfo>
<<<<<<< HEAD:src/components/Partner/DriverItem/index.jsx
                    <i className="ph-flag-checkered"></i>
                    <span>{numberOfRace}</span>
=======
                    <i className="ph-bold ph-flag-checkered"></i>
                    <span>10</span>
>>>>>>> partnerDash:src/components/Partner/DriverLists/index.jsx
                </DivInfo>
                <DivInfo>
                    <Animation $online></Animation>
                </DivInfo>
                <DivInfo>
                    <DetailDriver toggle={toggleIsOpen} isOpen={isOpen} />
                    <Button onClick={toggleIsOpen}>
                        <i className="ph-bold ph-dots-three-outline"></i>
                    </Button>
                </DivInfo>
            </DivDriver>
        </Lien>
    </>
  )
}

export default DriverItem;