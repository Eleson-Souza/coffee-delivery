import styled from "styled-components";

interface AdvantageItemContainer {
  color: string;
}

export const AdvantageItemContainer = styled.div<AdvantageItemContainer>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    padding: 0.5rem;

    background: ${(props) => props.color};
    border-radius: 50%;

    svg {
      color: ${({ theme }) => theme["background"]};
    }
  }
`;
