import styled from "styled-components";
import colors from "../../../colors";
import { Link } from "react-router-dom";


export const Col = styled.div`
    width: 25%;
    flex: 0 0 auto;
    margin: 1rem 0;
    padding: .5rem 1rem;
`
export const CardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: ${colors.secondary};
    
`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    padding: 1.5rem;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 2px 2px 10px 0px ${colors.shadow};
    ${(props) =>
        props.$first && `
            background-color: ${colors.yellow};
            background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
            color: ${colors.white};
        `
    }
`
export const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h3{
        font-size: 1.05rem;
        font-weight: 200;
    }
    i{
        font-size: 1.05rem;
    }
`

export const DashInfo = styled.div`
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: .2rem;
`

export const DashImg = styled.div`
    text-align: center;
    object-fit: cover;
    img{
        width: 60%;
    }
`

