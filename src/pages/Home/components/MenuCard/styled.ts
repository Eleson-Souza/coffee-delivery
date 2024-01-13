import styled from "styled-components";

export const MenuCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  padding: 1.25rem 1.5rem;
  margin-top: 0.5rem;
  position: relative;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px;

  img {
    position: absolute;
    top: -1.25rem;

    width: 7.5rem;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      padding: 0.25rem 0.5rem;
      margin-top: 5.65rem;

      border-radius: 100px;
      background: ${({ theme }) => theme["yellow-light"]};
      color: ${({ theme }) => theme["yellow-dark"]};
      font-size: 0.625rem;
      font-weight: 700;
    }
  }

  h3 {
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    line-height: 1;
    color: ${({ theme }) => theme["base-label"]};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin-top: 2.06rem;

    .price {
      font-family: "Baloo 2";
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.3;

      &::before {
        content: "R$";
        font-family: "Roboto";
        font-size: 0.875rem;
        text-align: right;
        color: ${({ theme }) => theme["base-text"]};
        margin-right: 0.2rem;
      }
    }

    > div {
      display: flex;
      gap: 0.5rem;

      button {
        display: flex;
        padding: 0.5rem;
        cursor: pointer;

        border: none;
        border-radius: 6px;
        background: ${({ theme }) => theme["purple-dark"]};

        svg {
          font-size: 1.375rem;
          color: #fff;
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }
    }
  }
`;
