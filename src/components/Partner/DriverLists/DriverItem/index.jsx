import React, {useState} from "react";
import {Animation, Button, DivDriver, DivImg, DivInfo, Text} from "../atoms";
import profile from "../../../../assets/driver/drivercard.webp";
import DetailDriver from "../../DetailDriver";


function DriverItem(props) {

    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <DivDriver>
            <DivImg>
                <img src={profile} alt="Image de profile"/>
            </DivImg>
            <DivInfo>
                <Text>
                    {props.nom} {props.prenom}
                </Text>
            </DivInfo>
            <DivInfo>
                <Text>
                    {props.voiture}
                </Text>
            </DivInfo>
            <DivInfo>
                <i className="ph-bold ph-flag-checkered"></i>
                <span>{props.courses.length}</span>
            </DivInfo>
            <DivInfo>
                <Animation $online></Animation>
            </DivInfo>
            <DivInfo>
                <DetailDriver toggle={toggleIsOpen} isOpen={isOpen} driver={props} />
                <Button onClick={toggleIsOpen}>
                    <i className="ph-bold ph-dots-three-outline"></i>
                </Button>
            </DivInfo>
        </DivDriver>
    )
}

export default DriverItem;