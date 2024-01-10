import styled from "styled-components";

export const OrderConfirmationContainer = styled.main`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-top: 0.25rem;
  }

  section {
    display: flex;
    align-items: center;
    gap: 6.38rem;
    margin-top: 2.5rem;

    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      padding: 2.5rem;
      border: 1px solid ${({ theme }) => theme.yellow};
      border-radius: 6px 36px;

      .address,
      .delivery,
      .payment {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          font-size: 1rem;
          color: ${({ theme }) => theme["background"]};
        }

        span {
          display: block;
        }
      }

      .address .icon {
        background: ${({ theme }) => theme["purple"]};
      }

      .delivery .icon {
        background: ${({ theme }) => theme["yellow"]};
      }

      .payment .icon {
        background: ${({ theme }) => theme["yellow-dark"]};
      }
    }

    img {
      width: 30.75rem;
    }
  }
`;
