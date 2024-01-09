import styled from 'styled-components';

export const TableConatiner = styled.thead`
  width: 100%;

  th {
    margin: 1rem;
  }
`;

export const THeaderConatiner = styled.thead`
  background: ${({ theme }) => theme['gray-300']};
`;
