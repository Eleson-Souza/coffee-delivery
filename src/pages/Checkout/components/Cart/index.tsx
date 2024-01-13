import { Trash } from "phosphor-react";
import { CartContainer } from "./styled";
import { formatPrice } from "../../../../utils/formatNumber";
import { Counter } from "../../../../components/Counter";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";

interface CartProps {
  id: string;
  srcImg: string;
  title: string;
  amount: number;
  price: number;
}

export function Cart({ id, srcImg, title, amount, price }: CartProps) {
  const { cart, updateItemFromCart, removeItemFromCart } =
    useContext(ShoppingCartContext);

  const [amountCounter, setAmountCounter] = useState(amount);

  const cartItem = cart.find((item) => item.id === id);

  useEffect(() => {
    if (cartItem) {
      if (amountCounter === 0) {
        removeItemFromCart(id);
      } else {
        cartItem.amount = amountCounter;
        cartItem.total = price * cartItem.amount;

        updateItemFromCart(id, cartItem);
      }
    }
  }, [amountCounter]);

  function handleRemoveFromCart() {
    removeItemFromCart(id);
  }

  return (
    <CartContainer>
      <div className="cart">
        <img src={srcImg} alt="" />

        <div className="product-info">
          <span>{title}</span>
          <div className="product-actions">
            <Counter amount={amountCounter} setAmount={setAmountCounter} />

            <button onClick={handleRemoveFromCart}>
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
