import styled from "styled-components";

export const CheckoutContainer = styled.main`
  form {
    display: flex;
    gap: 32px;

    section,
    aside {
      h3 {
        font-family: "Baloo 2";
        font-size: 18px;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 14.4px;
      }

      .box {
        display: flex;
        flex-direction: column;
        gap: 32px;

        padding: 40px;
        border-radius: 6px;
        background: ${({ theme }) => theme["base-card"]};

        header {
          display: flex;
          gap: 8px;

          line-height: 1.3;

          svg {
            font-size: 22px;
            color: ${({ theme }) => theme["yellow-dark"]};
          }

          span {
            color: ${({ theme }) => theme["base-subtitle"]};
          }
        }
      }
    }

    section {
      width: 640px;
    }

    aside {
      flex: 1;

      .product-item {
        max-height: 40.75rem;
        overflow-y: scroll;

        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 24px;

          hr {
            border: 0.0625rem solid ${({ theme }) => theme["base-button"]};
          }

          .total {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .sub-item {
              display: flex;
              justify-content: space-between;

              font-size: 0%12px;
            }

            .sub-item-total {
              font-size: 20px;
            }
          }

          .btn-order {
            padding: 12px 8px;
            border: none;
            border-radius: 0.375rem;
            background: ${({ theme }) => theme.yellow};
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            transition: all 0.2s;

            &:hover {
              background: ${({ theme }) => theme["yellow-dark"]};
            }
          }
        }

        .cart-items-none {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;

          a {
            width: fit-content;
            padding: 12px 8px;
            border: none;
            border-radius: 0.375rem;
            background: ${({ theme }) => theme.yellow};
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            transition: all 0.2s;
            text-decoration: none;

            &:hover {
              background: ${({ theme }) => theme["yellow-dark"]};
            }
          }
        }
      }
    }
  }
`;
