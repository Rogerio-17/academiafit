import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 180vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.main`
  width: 130vh;
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  input {
    width: 35rem;
    border-radius: 0px 8px 8px 0px;
    border: none;
    outline: none;
  }

  select {
    border-top: 2px solid ${({ theme }) => theme['gray-300']};
    background: ${({ theme }) => theme['gray-300']};
    border-radius: 8px 0px 0px 8px;
    outline: none;
  }

  button {
    &:hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }

  input,
  select {
    padding: 0.5rem;
  }
`;
