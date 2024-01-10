import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 32px 0px;
  margin-bottom: 2.5rem;

  img {
    height: 40px;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      &:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        padding: 8px;

        border-radius: 6px;
        background-color: ${(props) => props.theme["purple-light"]};
        font-size: 0.875rem;
        color: ${(props) => props.theme["purple-dark"]};

        svg {
          font-size: 1.375rem;
          color: ${(props) => props.theme["purple"]};
        }
      }
    }
  }
`;
