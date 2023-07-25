import React, {useEffect, useState} from "react";
import {
    Lien
} from "./atoms";
import {useAxios} from "../../../utils/hook/useAxios";


function DriverItem({item}) {

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

export default DriverItem;