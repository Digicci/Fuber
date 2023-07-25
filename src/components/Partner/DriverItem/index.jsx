<<<<<<< HEAD:src/components/Partner/DriverLists/index.jsx
import React, {useEffect, useState} from "react";
=======
import React, {useState, useEffect} from "react";
>>>>>>> master:src/components/Partner/DriverItem/index.jsx
import {
    Lien
} from "./atoms";
<<<<<<< HEAD:src/components/Partner/DriverLists/index.jsx
import DriverItem from "./DriverItem";
import {useAxios} from "../../../utils/hook/useAxios";
=======
import profile from "../../../assets/driver/drivercard.webp"
import DetailDriver from "../DetailDriver";
import { useStats } from "../../../utils/hook/Partner/useStats";
>>>>>>> master:src/components/Partner/DriverItem/index.jsx

function DriverItem({item}) {

<<<<<<< HEAD:src/components/Partner/DriverLists/index.jsx
    const {get} = useAxios()
    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        get('/entreprise/team').then((res) => {
            console.log(res)
            setDrivers(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
=======
    const stats = useStats()
    const [isOpen, setIsOpen] = useState(false)
    const [numberOfRace, setNumberOfRace] = useState(0)
    const nom = item.nom
    const prenom = item.prenom
    const vehicule = item.vehicule

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
>>>>>>> master:src/components/Partner/DriverItem/index.jsx

    useEffect(() => {
        stats.getNumberOfRaceById(item.id).then((res) => {
            setNumberOfRace(res.data.count)
        })
    }, [])

  return (
    <>
<<<<<<< HEAD:src/components/Partner/DriverLists/index.jsx
        {
            drivers.map((driver) => {
              return (
                  <Lien>
                      <DriverItem {...driver} />
                  </Lien>
              )
            })
        }
=======
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
                    <i className="ph-flag-checkered"></i>
                    <span>{numberOfRace}</span>
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
>>>>>>> master:src/components/Partner/DriverItem/index.jsx
    </>
  )
}

export default DriverItem;