import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.main`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Card = styled.section`
  width: 100%;
  max-width: 480px;
  padding: 3rem 2rem;
  background: #fff;
  border-radius: 22px;
  text-align: center;
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
  margin: 1rem 0;
  color: var(--secondary-color);
`;

export const Text = styled.p`
  color: #555;
  line-height: 1.6;
`;

export const SuccessIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border-radius: 50%;
  background: #66b280;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorIcon = styled(SuccessIcon)`
  background: #e57373;
`;

export const Loader = styled.div`
  width: 54px;
  height: 54px;
  margin: 0 auto;
  border: 4px solid #e5e5e5;
  border-top-color: #66b280;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

 export const Lien = styled(Link)`
  display: inline-flex;
  margin-top: 1.5rem;
  padding: 0.85rem 1.4rem;
  border-radius: 12px;
  background: var(--secondary-color);
  color: white;
  text-decoration: none;
  font-weight: 600;
`;