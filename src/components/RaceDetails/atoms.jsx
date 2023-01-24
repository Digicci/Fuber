import styled from "styled-components";
import colors from "../../colors";

export const ModalDetails = styled.div`
padding: 2rem .5rem 1rem;
margin: 0 .5rem;
border-bottom: 1px solid ${colors.fifth};
p{
    display: flex;
    align-items: center;
    font-size: 1.05rem;
    font-weight: 600;
}
i{
    font-size: 1.25rem;
    margin-right: .5rem;
}
`
export const Details = styled.div`
display: flex;
flex-direction: column;
margin: 1rem 0 0 0;
${(props) =>
    props.$total &&
    `margin: 2.5rem 0 0 0`
}
`
export const InfoAdresse = styled.div`
display: flex;
justify-content: space-between;
margin: .5rem 0;
`
export const Span = styled.span`
${(props) =>
    props.$spanLeft &&
    `width: 40%;
    font-size:.85rem;
    font-weight: 600;`
}
${(props) =>
    props.$spanRight &&
    `width: 60%;
    font-size: .8rem;
    overflow-wrap: break-word;`
}
`
export const Panier = styled.div`
padding: .5rem;
`
export const PanierInfo = styled.div`
display: flex;
justify-content: space-between;
font-size: .83rem;
margin: .8rem;
p{
    margin-bottom: 0;
}
span{
    margin-bottom: 0;
}
`
export const Total = styled.p`
margin-bottom: 0;
font-weight:600;
font-size:.95rem;
`
export const TotalPrice = styled.span`
margin-bottom: 0;
font-weight:600;
font-size:.95rem;
`
export const DivValider = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 2rem 0 0 0;
`