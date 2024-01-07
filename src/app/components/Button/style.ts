'use client';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.red};
  border-radius: 8rem;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  &:hover {
    transition: 0.2s;
  }
`;
