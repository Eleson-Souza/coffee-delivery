import styled from "styled-components";

export const OrderInfoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    display: block;
    color: red;
    font-size: 0.75rem;
    margin-top: 0.4rem;
  }

  .delivery-address {
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

    .form {
      display: flex;
      flex-direction: column;
      gap: 16px;

      input {
        padding: 12px;
        border: 0.0625rem solid ${({ theme }) => theme["base-button"]};
        border-radius: 0.25rem;
        background: ${({ theme }) => theme["base-input"]};
        font-size: 14px;

        &:focus {
          outline: 0.0625rem solid ${({ theme }) => theme["yellow-dark"]};
        }
      }

      input.upper {
        text-transform: uppercase;
      }

      .form-group {
        display: flex;
        gap: 12px;
      }

      .home {
        input:last-child {
          flex: 1;
        }
      }

      .city {
        input {
          width: 100%;
        }

        div:nth-child(1) {
          flex: 0.4;
        }
        div:nth-child(2) {
          flex: 0.5;
        }
        div:nth-child(3) {
          flex: 0.1;
        }
      }
    }
  }

  .payment-methods {
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

    .methods {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;

      button {
        flex: 1;

        display: flex;
        align-items: center;
        gap: 12px;

        padding: 16px;
        border: 0.0625rem solid transparent;
        border-radius: 0.375rem;
        background: ${({ theme }) => theme["base-button"]};
        font-size: 12px;
        line-height: 1.6;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.2s;

        svg {
          font-size: 16px;
          color: ${({ theme }) => theme.purple};
        }

        &:hover {
          background: ${({ theme }) => theme["base-hover"]};
        }
      }

      button.active {
        border: 0.0625rem solid ${({ theme }) => theme.purple};
        background: ${({ theme }) => theme["purple-light"]};
      }
    }
  }
`;
