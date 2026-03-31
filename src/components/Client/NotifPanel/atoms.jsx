import styled from 'styled-components'
import colors from '../../../colors'


export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 1000;
  background: ${colors.primary};
  max-width: 450px;
  border: 1px solid red;
`