import { AdvantageItemContainer } from "./styled";
import { ReactNode } from "react";

interface AdvantageItemProps {
  icon: ReactNode;
  text: string;
  color: string;
}

export function AdvantageItem({ icon, text, color }: AdvantageItemProps) {
  return (
    <AdvantageItemContainer color={color}>
      <div>{icon}</div>
      {text}
    </AdvantageItemContainer>
  );
}
