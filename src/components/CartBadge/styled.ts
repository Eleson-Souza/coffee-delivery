import styled from "styled-components";

export const CartBadgeContainer = styled.div`
  height: 2.375rem;
  position: relative;
  padding: 0.5rem;
  background: ${(props) => props.theme["yellow-light"]} !important;
  border-radius: 0.375rem;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme["yellow-dark"]} !important;
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${(props) => props.theme["yellow-dark"]};
    font-weight: bold;
    font-size: 0.72rem;
    color: #fff;
  }
`;
