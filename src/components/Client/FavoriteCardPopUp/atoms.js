import styled from 'styled-components';
import colors from '../../../colors';

export const BlurContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.shadow};
  z-index: 100;
  backdrop-filter: blur(5px);
  ${({$show}) => !$show && `
        display: none;
    `}
`

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
  background-color: ${colors.primary};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.sixth};
  margin: 0 0 20px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`

export const Message = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${colors.secondary};
  margin: 0 0 20px;
  padding: 0 20px;

  & > strong {
    color: ${colors.sixth};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 0;
  justify-self: flex-end;
  width: 100%;
`

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.primary};
  background-color: ${colors.sixth};
  border: 0;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.primary};
  }

  ${({$cancel}) => $cancel && `
        background-color: ${colors.red};
        color: ${colors.primary};
        &:hover {
            background-color: ${colors.sixth};
        `
  }
`