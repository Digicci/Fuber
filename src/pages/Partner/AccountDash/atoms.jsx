import styled from 'styled-components'

export const Container = styled.div`
 width: 100vw;
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 min-height: 100vh;
 @media (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }


`