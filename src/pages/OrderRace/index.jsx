import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../colors";
import { StyledInput,
    ButtonOrder
} from "../../utils/Atoms";
import confort from "../../assets/confort.webp";
import van from "../../assets/van.webp";
import hybride from "../../assets/hybride.webp";
import AddPayment from "../../components/AddPayment";
import RaceDetails from "../../components/RaceDetails";
import Map from "../../components/Map";


const ContainerOrder = styled.div`
    width: 96vw;
    display: flex;
    justify-content: space-evenly;
    padding: 1.5rem 0;
    @media (max-width:768px){
        flex-direction: column-reverse;
        
    }
`
const Order = styled.div`
    width: 30%;
    box-shadow: 12px 0 31px 9px ${colors.fourth} ;
    background: ${colors.primary};
    border-radius: 5px;
    padding: 1rem .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 1rem 0;
    }
    @media (max-width:768px) {
        width: 100%;
    }
`
const TypeChoiceCar = styled.div`
    width: 100%;
    height:200px;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background: ${colors.fifth};
    }
`
const CarType = styled.div`
    border-radius: 5px;
    padding: .5rem .3rem;
    margin: 0.5rem 0;
    display: flex;
    cursor: pointer;
    height: 60%;
    ${(props) =>
        props.$active &&
        `border: 1px solid ${colors.sixth}`
    }
`
const CarImg = styled.img`
    width: 20%;
    display: flex;
    aspect-ratio: 1/1;
    @media (max-width:768px){
        width: 15%;
    }
    @media (max-width:425px){
        width: 25%;
    }
`
const InfoCar = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 0 .5rem;
    h5{
        margin: 0 1rem 0 0;
        font-size: 1.25rem;
        font-weight: 550;
    }
    span{
        margin: 0 0 1rem 0;
        display: flex;
        align-items: center;
    }
    i{
        font-size: 1.15rem;
    }
    p{
        font-size: .8rem;
        margin: 0 0 1rem 0;
    }
`
const Price = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p{
        font-size: 1.15rem;
        font-weight: 600;
    }
`
const ChangeCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 0 0;
    cursor: pointer;
    p{
        margin: 0;
    }
    span{
        display: flex;
        align-items: center;
    }
`

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`

const Suggestions = styled.div`
    width: 100%;
    flex-direction: column;
    align-items: center;
    display: none;
    position: absolute;
    background: ${colors.primary};
    border: 1px solid ${colors.fourth};
    border-radius: 5px;
    padding: 0.5rem 0;
    box-shadow: 0 0 10px 0 ${colors.shade};
    top: 100%;
    z-index: 2;
    h3{
        font-size: 1.25rem;
    }
  
    ${(props) => props.$active && `
        display: flex;
    `}
`

function OrderRace(){

    const [isOpen,setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const [propositions, setProposition] = useState({
        start: {},
        end: {}
    })

    const [startPropArray, setStartPropArray] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const coords = {
                    adresse : "Ma position",
                    location : {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                }
            const state = {...propositions}
            state.start = {firstStart: coords}
            setProposition(state)
        })
    }, [])

    const [isOpenDetails, setIsOpenDetails] = useState(false)
    const toggleIsOpenDetails = () => {
        setIsOpenDetails(!isOpenDetails)
    }

    const [suggest, setSuggest] = useState({
        start: false,
        end: false
    })
    const toggleSuggest = (name) => {
        const state = {...suggest}
        state[name] = !state[name]
        setSuggest(state)
    }

    const [raceInfo, setRaceInfo] = useState({
        start: localStorage.getItem('raceStart') ?? '',
        end: localStorage.getItem('raceEnd') ?? ''
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const state = { ...raceInfo }
        state[name] = value
        setRaceInfo(state)
    }

    useEffect(() => {
        setStartPropArray(Object.entries(propositions.start))
    }, [propositions])


    return(
        <>
            <ContainerOrder>
                <Order>
                    <h2>Commandez une course</h2>
                    <InputWrapper>
                        <StyledInput
                            value={raceInfo.start}
                            $inputAddCard
                            type="text"
                            placeholder="Lieu de prise en charge"
                            name="start"
                            onChange={handleChange}
                            onFocus={() => {toggleSuggest('start')}}
                            onBlur={() => {toggleSuggest('start')}}
                        />
                        <Suggestions $active={suggest.start}>
                            {
                                startPropArray.map((prop) => {
                                    return <h3 key={prop[0]}>{prop[1].adresse}</h3>
                                })
                            }
                        </Suggestions>
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput
                            value={raceInfo.end}
                            onChange={handleChange}
                            $inputAddCard
                            type="text"
                            placeholder="Déstination"
                            name="end"
                            onFocus={() => {toggleSuggest('end')}}
                            onBlur={() => {toggleSuggest('end')}}
                        />
                        <Suggestions $active={suggest.end}>
                            <h3>Suggestions</h3>
                        </Suggestions>
                    </InputWrapper>
                    <TypeChoiceCar>
                        <CarType>
                            <CarImg src={confort} alt="Confort car" />
                            <InfoCar>
                                <h5>Confort</h5>
                                <span>
                                    <i className="ph-users"></i>
                                    4
                                </span>
                                <p>Véhicule Spacieux</p>
                                <p>arriver environ au lieux de prise en charge</p>
                            </InfoCar>
                            <Price>
                                <p>13.50€</p>
                            </Price>
                        </CarType>
                        <CarType>
                            <CarImg src={hybride} alt="Hybride car" />
                            <InfoCar>
                                <h5>Hybride</h5>
                                <span>
                                    <i className="ph-users"></i>
                                    4
                                </span>
                                <p>Véhicule Spacieux</p>
                                <p>arriver environ au lieux de prise en charge</p>
                            </InfoCar>
                            <Price>
                                <p>13.50€</p>
                            </Price>
                        </CarType>
                        <CarType>
                            <CarImg src={van} alt="Van car" />
                            <InfoCar>
                                <h5>Van</h5>
                                <span>
                                    <i className="ph-users"></i>
                                    4
                                </span>
                                <p>Véhicule Spacieux</p>
                                <p>arriver environ au lieux de prise en charge</p>
                            </InfoCar>
                            <Price>
                                <p>13.50€</p>
                            </Price>
                        </CarType>
                    </TypeChoiceCar>
                    <ChangeCard  onClick={toggleIsOpen}>
                        <p>choisir un mode de paiement:</p>
                        <span>
                            Carte ****4857
                            <i className="ph-caret-right"></i>
                        </span>
                    </ChangeCard>
                    <AddPayment toggle={toggleIsOpen} isOpen={isOpen}/>
                    <RaceDetails toggle={toggleIsOpenDetails} isOpenDetails={isOpenDetails} />
                    <ButtonOrder onClick={toggleIsOpenDetails}>
                        Commandez la course
                    </ButtonOrder>
                </Order>
                <Map/>
            </ContainerOrder>
        </>
    )
}

export default OrderRace