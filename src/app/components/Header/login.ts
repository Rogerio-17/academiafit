import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.red};
  padding: 0.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    font-weight: 700;

    a {
      color: ${({ theme }) => theme.white};

      &:hover {
        color: ${({ theme }) => theme.black};
        transition: 0.2s;
      }
    }
  }

  img {
    width: 6rem;
    height: 4rem;
  }
`;
