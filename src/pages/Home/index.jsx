import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../utils/hook/useAuth";
import { useAxios } from "../../utils/hook/useAxios";
import { StyledLink } from "../../utils/Atoms";

function Home() {

    const axiosInstance = useAxios()
    const auth = useAuth()

    const handleClick = () => {
        axiosInstance.get('user/get').then(res => {
            console.log(res.data)
        })
    }

  return(
    <>
      <h1>Accueil</h1>

        <StyledLink $isFullLink onClick={handleClick}>GET USER INFO</StyledLink>
    </>
  )
}

export default Home