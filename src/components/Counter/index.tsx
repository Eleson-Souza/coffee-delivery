import { Minus, Plus } from "phosphor-react";

import { CounterContainer } from "./styled";

interface CounterProps {
  amount: number;
  setAmount: (amount: number) => void;
}

export function Counter({ amount, setAmount }: CounterProps) {
  function handlePlus() {
    setAmount(amount + 1);
  }

  function handleMinus() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  return (
    <CounterContainer>
      <Minus weight="bold" onClick={handleMinus} />
      <input type="number" value={amount} readOnly />
      <Plus weight="bold" onClick={handlePlus} />
    </CounterContainer>
  );
}
