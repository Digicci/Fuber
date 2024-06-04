import React, { useEffect, useState } from "react";
import {
    MyRaceH3,
    ContainerMyRaces,
    RaceInProgress,
    DivRace,
    RaceImg,
    InfoRace,
    DivButton,
    ButtonRaceFinish,
} from "../../../utils/Atoms";

import {useAxios} from "../../../utils/hook/useAxios";
import Driver from "../../../utils/Data/Client/Driver";
import {toast} from "react-toastify";
import {useCsrf} from "../../../utils/hook/useCsrf";


function AddMyRace() {

    const axios = useAxios()
    const csrf = useCsrf()
    const [data, setData] = useState([])

    useEffect(() => {
        csrf.getCsrfToken()
        axios.get('race/getAllPending').then((res) => {
            setData(res.data)
        })
    }, [])
    
    const onCancel = (raceId) => {
        const id = toast.loading("Demande de remboursement en cours")
        const toastOptions = {
            autoClose: 3000,
            toastId: id
        }
        axios.post('/race/refundRace', {raceId, _csrf: csrf.token})
          .then(res => {
              if (res.data === 'succeeded') {
                  toast.update(id, {
                      render: "Demande de remboursement effectuée",
                      autoClose: 3000,
                      isLoading: false,
                      type: "success"
                  })
                  const races = data.filter((r) => r.id !== raceId)
                  setData(races)
              } else {
                  toast.update(id, {
                      render: "Une erreur s'est produite lors de la demande de remboursement",
                      autoClose: 3000,
                      isLoading: false,
                      type: "error"
                  })
              }
          }).catch(e => {
              console.log("catch",e.response)
              toast.update(id, {
                  type: "error",
                  render: e.response.data,
                  autoClose: 3000,
                  isLoading: false
              })
        })
    }

    return (
        <>
            <ContainerMyRaces>
                {data.length <= 0 ? (
                    <MyRaceH3>
                        Il semble que vous n'avez pas de course en cours.
                    </MyRaceH3>
                ) : (
                    <>
                        <RaceInProgress>
                            Courses en cours
                        </RaceInProgress>
                        {
                            data.map((race) => {
                                const dateObj = new Date(race.createdAt)
                                const date = dateObj.getDate() + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear()
                                const time = dateObj.getHours() + ":" + dateObj.getMinutes()
                                const entreprise = race.entreprise
                                const car = Driver.find((d) => {
                                    return d.id === parseInt(entreprise.vehicule.type)
                                })
                                const img = car.imgInfo
                                return (
                                    <DivRace key={race.id}>
                                        <RaceImg src={img.img} alt={img.alt}/>
                                        <InfoRace>
                                            <h4>{car.title.toUpperCase()} par {entreprise.prenom}</h4>
                                            <h5>{entreprise.num}</h5>
                                            <h5>{(race.total / 100).toFixed(2)}€</h5>
                                            <h5>Départ : {race.start}</h5>
                                            <h5>Arrivée : {race.end}</h5>
                                            <h5>{`${date} à ${time}`}</h5>
                                        </InfoRace>
                                        <DivButton>
                                            <ButtonRaceFinish>
                                                {race.validNumber}
                                            </ButtonRaceFinish>
                                        </DivButton>
                                        <DivButton>
                                            <button onClick={() => onCancel(race.id)}>
                                                Annuler la course
                                            </button>
                                        </DivButton>
                                    </DivRace>
                                )
                            })
                        }
                    </>
                )
                }
            </ContainerMyRaces>
        </>
    )
}

export default AddMyRace