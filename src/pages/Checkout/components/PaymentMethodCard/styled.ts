import styled from "styled-components";

export const PaymentMethodCardContainer = styled.button`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  background: ${({ theme }) => theme["base-button"]};
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme["base-hover"]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.purple};
    background: ${({ theme }) => theme["purple-light"]};
  }
`;
