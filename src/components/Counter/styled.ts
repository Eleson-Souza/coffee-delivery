import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;
  background: ${({ theme }) => theme["base-button"]};

  svg {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["purple"]};
    cursor: pointer;
  }

  input {
    width: 1.3125rem;
    height: 1.3125rem;
    border: none;
    background: transparent;
    text-align: center;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;
