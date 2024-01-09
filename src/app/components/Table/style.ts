import styled from 'styled-components';

export const TableConatiner = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.2rem;

  th {
    background: ${({ theme }) => theme['gray-500']};
  }
`;

export const THeaderConatiner = styled.thead`
  height: 3rem;
`;

export const TBodyContainer = styled.thead`
  background: ${({ theme }) => theme['gray-300']};

  tr {
    height: 2rem;
    text-align: center;
  }
`;
