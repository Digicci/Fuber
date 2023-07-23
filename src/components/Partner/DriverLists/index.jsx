import React, {useEffect, useState} from "react";
import {
    Lien
} from "./atoms";
import DriverItem from "./DriverItem";
import {useAxios} from "../../../utils/hook/useAxios";

function DriverLists() {

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

  return (
    <>
        {
            drivers.map((driver) => {
              return (
                  <Lien>
                      <DriverItem {...driver} />
                  </Lien>
              )
            })
        }
    </>
  )
}

export default DriverLists;