import React, { useState } from "react";
import van from "../../assets/van.webp"
import confort from "../../assets/confort.webp";
import hybride from "../../assets/hybride.webp";
import CarCard from "../CarCard";
import {
    TypeChoiceCar,
} from "./atoms"




function CarCards(){

    const [data,setData] = useState([
        {
            places: 4,
            title: 'confort',
            imgInfo:{
                img:confort,
                alt:'Confort car'
            },
            descriptionInfo:{
                vehicule:'Vehicule spacieux',
                position:'5 min',
                price:'13.50€'
            }
        },
        {
            places: 8,
            title: 'Van',
            imgInfo:{
                img:van,
                alt:'Van car'
            },
            descriptionInfo:{
                vehicule:'Vehicule spacieux',
                position:'15 min',
                price:'15.50€'
            }
        },
        {
            places: 3,
            title: 'Hybride',
            imgInfo:{
                img:hybride,
                alt:'Hybride car'
            },
            descriptionInfo:{
                vehicule:'Vehicule spacieux',
                position:'30 min',
                price:'11.00€'
            }
        }
    ]) 

    return(
        <>
            <TypeChoiceCar>
                {
                    data.map((car) => {
                        return <CarCard {...car}/>
                    })
                }
            </TypeChoiceCar>
        
        </>
    )
}
export default CarCards