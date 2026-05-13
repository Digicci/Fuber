import colors from '../../colors'
import styled, {keyframes} from 'styled-components'

 export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #f5f7fb;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  border-radius: 24px;
  padding: 42px;
  text-align: center;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
`;

export const Title = styled.h1`
  margin: 22px 0 12px;
  font-size: 30px;
  font-weight: 700;
  color: #111827;
`;

export const Text = styled.p`
  margin: 0;
  color: #6b7280;
  line-height: 1.7;
  font-size: 15px;

  strong {
    color: #111827;
  }
`;

 export const IconWrapper = styled.div`
  width: 78px;
  height: 78px;
  margin: 0 auto;
  border-radius: 50%;
  background: #10b981;

  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 38px;
    color: #ffffff;
  }
`;

export const Loader = styled.div`
  width: 56px;
  height: 56px;
  margin: 0 auto;

  border: 4px solid #e5e7eb;
  border-top-color: #111827;
  border-radius: 50%;

  animation: ${spin} 0.8s linear infinite;
`;