import React, { useState } from "react";
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

    const [isOpenDetails, setIsOpenDetails] = useState(false)
    const toggleIsOpenDetails = () => {
        setIsOpenDetails(!isOpenDetails)
    }

    const [startSuggest, setStartSuggest] = useState(false)
    const toggleStartSuggest = () => {
        setStartSuggest(!startSuggest)
    }

    return(
        <>
            <ContainerOrder>
                <Order>
                    <h2>Commandez une course</h2>
                    <InputWrapper>
                        <StyledInput
                            $inputAddCard
                            type="text"
                            placeholder="Lieu de prise en charge"
                            name="places"
                            onFocus={toggleStartSuggest}
                            onBlur={toggleStartSuggest}
                        />
                        <Suggestions $active={startSuggest}>
                            <h3>The suggestions</h3>
                        </Suggestions>
                    </InputWrapper>
                    <StyledInput
                    $inputAddCard
                    type="text"
                    placeholder="Déstination"
                    name="destination"></StyledInput>
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