import React from "react";
import {
    List,
    H4,
    Div,
    DivDriver,
    DivImg,
    DivInfo,
    Text,
    Lien,
    Animation
} from "./atoms";
import profile from "../../../assets/driver/drivercard.webp"

function DriverList() {
    return (
        <>
            <List>
                <H4>
                    Chauffeurs
                    <i className="ph-dots-three"></i>
                </H4>
                <Div>
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
                                <i className="ph-flag-checkered"></i>
                                <span>10</span>
                            </DivInfo>
                            <DivInfo $online>
                                <Animation></Animation>
                            </DivInfo>
                        </DivDriver>
                    </Lien>
                </Div>
            </List>
        </>
    )
}

export default DriverList;