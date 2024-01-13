import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;

  section,
  aside {
    h3 {
      font-family: "Baloo 2";
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 0.9rem;
    }

    .box {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      padding: 2.5rem;
      border-radius: 0.375rem;
      background: ${({ theme }) => theme["base-card"]};

      header {
        display: flex;
        gap: 0.5rem;

        line-height: 1.3;

        svg {
          font-size: 1.375rem;
          color: ${({ theme }) => theme["yellow-dark"]};
        }

        span {
          color: ${({ theme }) => theme["base-subtitle"]};
        }
      }
    }
  }

  section {
    width: 40rem;

    .boxes {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .delivery-address {
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input {
            padding: 0.75rem;
            border: 1px solid ${({ theme }) => theme["base-button"]};
            border-radius: 4px;
            background: ${({ theme }) => theme["base-input"]};
            font-size: 0.875rem;

            &:focus {
              outline: 1px solid ${({ theme }) => theme["yellow-dark"]};
            }
          }

          .form-group {
            display: flex;
            gap: 0.75rem;
          }

          .home {
            input:last-child {
              flex: 1;
            }
          }

          .city {
            input {
              &:nth-child(1) {
                width: 35%;
              }

              &:nth-child(2) {
                width: 55%;
              }

              &:nth-child(3) {
                width: 10%;
              }
            }
          }
        }
      }

      .payment-method .methods {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.75rem;
      }
    }
  }

  aside {
    flex: 1;

    .product-item {
      .cart-items {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        hr {
          border: 1px solid ${({ theme }) => theme["base-button"]};
        }

        .total {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          .sub-item {
            display: flex;
            justify-content: space-between;

            font-size: 0%.75rem;
          }

          .sub-item-total {
            font-size: 1.25rem;
          }
        }

        .btn-order {
          padding: 0.75rem 0.5rem;
          border: none;
          border-radius: 6px;
          background: ${({ theme }) => theme.yellow};
          color: #fff;
          font-size: 0.875rem;
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
        gap: 2rem;

        a {
          width: fit-content;
          padding: 0.75rem 0.5rem;
          border: none;
          border-radius: 6px;
          background: ${({ theme }) => theme.yellow};
          color: #fff;
          font-size: 0.875rem;
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
`;
