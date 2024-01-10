import { Minus, Plus } from "phosphor-react";

import { CounterContainer } from "./styled";

interface CounterProps {
  amount: number;
}

export function Counter({ amount }: CounterProps) {
  return (
    <CounterContainer>
      <Minus weight="bold" />
      <input type="number" value={amount} readOnly />
      <Plus weight="bold" />
    </CounterContainer>
  );
}
