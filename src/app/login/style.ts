'use client';

import styled from 'styled-components';

export const LoginContainer = styled.form`
  width: 23rem;
  margin: auto;
  margin-top: 4rem;
  background: ${({ theme }) => theme['gray-300']};
  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 20rem;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const InputConateiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  input {
    width: 20rem;
    padding: 0.6rem;
    margin-top: 0.5rem;
    border-radius: 8px;
    border: 1px solid transparent;

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.red};
    }
  }

  p {
    color: ${({ theme }) => theme.red};
    font-size: 0.8rem;
    margin-top: 0.2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.red};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 6rem;
    height: 4rem;
  }
`;
