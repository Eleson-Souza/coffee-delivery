import { ShoppingCart } from "phosphor-react";

import { CartBadgeContainer } from "./styled";

interface CartBadgeProps {
  amount: number;
}

export function CartBadge({ amount }: CartBadgeProps) {
  return (
    <CartBadgeContainer>
      <ShoppingCart weight="fill" />
      {amount > 0 && <span>{amount}</span>}
    </CartBadgeContainer>
  );
}
