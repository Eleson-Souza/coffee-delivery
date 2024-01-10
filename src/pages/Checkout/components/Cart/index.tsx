import { Minus, Plus, Trash } from "phosphor-react";
import { CartContainer } from "./styled";
import { formatPrice } from "../../../../utils/formatNumber";
import { Counter } from "../../../../components/Counter";

interface CartProps {
  srcImg: string;
  title: string;
  amount: number;
  price: number;
}

export function Cart({ srcImg, title, amount, price }: CartProps) {
  return (
    <CartContainer>
      <div className="cart">
        <img src={srcImg} alt="" />

        <div className="product-info">
          <span>{title}</span>
          <div className="product-actions">
            <Counter amount={amount} />

            <button>
              <Trash />
              Remover
            </button>
          </div>
        </div>
      </div>

      <strong>{formatPrice(price)}</strong>
    </CartContainer>
  );
}
