import React, {useState} from "react";
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

function DriverItem({item}) {

    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Lien>
            <DivDriver>
                <DivImg>
                    <img src={profile} alt="Image de profile"/>
                </DivImg>
                <DivInfo>
                    <Text>
                        {item.nom} {item.prenom}
                    </Text>
                </DivInfo>
                <DivInfo>
                    <Text>
                        {item.vehicule?.marque || "Aucun"} {item.vehicule?.modele || "véhicule"}
                    </Text>
                </DivInfo>
                <DivInfo>
                    <i className="ph-bold ph-flag-checkered"></i>
                    <span>{item.courses?.length || 0}</span>
                </DivInfo>
                <DivInfo>
                    {
                        // If online is true Animation is green otherwise he's red
                        // ToDo : change the online system to send information to the server and save it in db
                    }
                    <Animation $online={true}></Animation>
                </DivInfo>
                <DivInfo>
                    <DetailDriver toggle={toggleIsOpen} isOpen={isOpen} driver={item} />
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