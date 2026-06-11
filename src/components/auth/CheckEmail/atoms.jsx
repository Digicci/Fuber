import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../../colors'

export const Page = styled.main`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Card = styled.section`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  border-radius: 22px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.08);
`;

export const Icon = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: #66b280;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 2.2rem;
  }
`;

export const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 2rem;
  color: ${colors.secondary};
`;

export const Text = styled.p`
  margin: 0 auto 0.8rem;
  max-width: 380px;
  color: #555;
  line-height: 1.6;
`;

export const TextSmall = styled.p`
  margin: 0 auto 2rem;
  max-width: 380px;
  color: #777;
  font-size: 0.95rem;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.85rem 1.4rem;
  border-radius: 12px;
  background: ${colors.secondary};
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
`;