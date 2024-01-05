'use client';

import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 23rem;
  height: 26rem;
  margin: auto;
  margin-top: 4rem;
  background: ${({ theme }) => theme['gray-300']};
  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
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
