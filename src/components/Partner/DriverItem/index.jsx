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
                        Nom Prenom
                    </Text>
                </DivInfo>
                <DivInfo>
                    <Text>
                        Voiture
                    </Text>
                </DivInfo>
                <DivInfo>
                    <i className="ph-bold ph-flag-checkered"></i>
                    <span>10</span>
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