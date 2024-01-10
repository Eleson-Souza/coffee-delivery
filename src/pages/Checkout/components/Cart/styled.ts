import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0.25rem;

  .cart {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    .product-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .product-actions {
        display: flex;
        gap: 0.5rem;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          padding: 0.5rem;

          border-radius: 6px;
          border: none;
          background: ${({ theme }) => theme["base-button"]};
          font-size: 0.75rem;
          text-transform: uppercase;
          transition: all 0.2s;

          svg {
            font-size: 1rem;
            color: ${({ theme }) => theme.purple};
          }

          &:hover {
            background: ${({ theme }) => theme["base-hover"]};
          }
        }
      }
    }
  }
`;
