import { PaymentMethodCardContainer } from "./styled";
import { ReactNode } from "react";

interface PaymentMethodCardProps {
  icon: ReactNode;
  title: string;
}

export function PaymentMethodCard({ icon, title }: PaymentMethodCardProps) {
  return (
    <PaymentMethodCardContainer>
      {icon}
      {title}
    </PaymentMethodCardContainer>
  );
}
