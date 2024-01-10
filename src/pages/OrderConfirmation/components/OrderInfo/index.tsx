import { ReactNode } from "react";
import { OrderInfoContainer } from "./styled";

interface OrderInfoProps {
  icon: ReactNode;
  color: string;
  title: string;
  subtitle: string;
}

export function OrderInfo({ icon, title, subtitle }: OrderInfoProps) {
  return (
    <OrderInfoContainer>
      {icon}
      <div>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    </OrderInfoContainer>
  );
}
