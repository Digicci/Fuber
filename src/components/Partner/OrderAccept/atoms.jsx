import styled from 'styled-components'
import colors from '../../../colors'

export const Container = styled.div`
 position: sticky;
 bottom: 0;
 right: 0;
 width: 100%;
 grid-area: popup;
 @media (max-width: 768px) {
  width: 100%;
 }
`

export const DivOnline = styled.div`
 background: ${colors.primary};
 padding: .5rem 1rem;
 box-shadow: -3px 0px 13px -1px rgb(0 0 0 / 41%);

 p {
  margin-bottom: 0;
 }
`

export const Popup = styled.div`
 background: ${colors.sixth};
 color: ${colors.primary};
`

export const TopOrder = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: .7rem 1rem;
 font-size: .9rem;
 font-weight: 600;
 cursor: pointer;
`

export const MpOrder = styled.span`
 display: flex;
 align-items: center;
 font-size: 1.4rem;

 i {
  display: flex;
 }

 button {
  background: transparent;
  border: none;
  color: ${colors.primary};
  font-size: 1.4rem;
 }
`

export const BottomOrder = styled.div`
 display: flex;
 justify-content: center;
 padding: 1rem 0 2rem;
 transition: .5s ease;
 ${(props) =>
  !props.$open &&
  `
      height: 0;
      overflow: hidden;
      padding: 0;
    `
 }
`
export const InfoOrder = styled.div`
 padding: 2rem 0;
 width: 100%;
 @media (min-width: 768px) {
  width: 50%;
 }
`

export const AcceptDiv = styled.div`
 text-align: center;
 padding: 1rem 0;
`

export const AcceptButton = styled.button`
 position: relative;
 background: ${colors.primary};
 color: ${colors.sixth};
 overflow: hidden;
 z-index: 2;
 padding: .6rem 2rem;
 font-size: .9rem;
 border-radius: 500px;
 cursor: pointer;
 border: none;

 &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #333333;
  animation: animate 10s linear;
  z-index: -1;
 }

 @keyframes animate {
  from {
   width: 0;
  }
  to {
   width: 100%;
  }
 }
`

export const RefuseButton = styled.button`
 background: ${colors.red};
 color: ${colors.primary};
 margin-left: .5rem;
 padding: .6rem 2rem;
 font-size: .9rem;
 border-radius: 500px;
 cursor: pointer;
 border: none;

 &:hover {
  background: rgba(245, 5, 5, 0.87);
 }
`

export const RacePrice = styled.p`
 font-size: 1.65rem;
 font-weight: 600;
 margin: 1rem 0;
 text-align: center;
`

export const RaceInfo = styled.div`
 p {
  display: flex;
  align-items: center;
  font-size: .95rem;
  margin-top: 0;
  margin-bottom: 1rem;
 }

 i {
  margin-right: .5rem;
  font-size: 1.5rem;
 }

 ul > li {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  padding: 0 0 .5rem 0;
  list-style: none;
  border-bottom: 1px solid ${colors.primary};
  cursor: pointer;
 }
`