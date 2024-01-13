import { ShoppingCart } from "phosphor-react";

import { MenuCardContainer } from "./styled";
import { Counter } from "../../../../components/Counter";
import { useContext, useState } from "react";
import { MenuCardItem } from "../../../../constants/products";
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";
import "react-toastify/dist/ReactToastify.css";
import { toastOptionsDefault } from "../../../../constants/toastify";
import { toast } from "react-toastify";

interface MenuCardProps extends MenuCardItem {}

export function MenuCard({
  id,
  srcImg,
  productName,
  description,
  tags,
  price,
}: MenuCardProps) {
  const { cart, addItemToCart, updateItemFromCart } =
    useContext(ShoppingCartContext);

  const [amount, setAmount] = useState(0);

  function formatPrice(price: number): string {
    const options: Intl.NumberFormatOptions = {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    };

    return Intl.NumberFormat("pt-BR", options).format(price);
  }

  function addToCart() {
    const cartItem = cart.find((item) => item.id === id);

    if (!cartItem) {
      addItemToCart({
        id,
        srcImg,
        productName,
        description,
        price,
        amount,
        total: price * amount,
        tags,
      });
    } else {
      cartItem.amount += amount;
      cartItem.total = price * cartItem.amount;

      updateItemFromCart(id, cartItem);
    }

    toast.success(
      `${amount} item(s) adicionados no carrinho.`,
      toastOptionsDefault
    );
  }

  return (
    <MenuCardContainer>
      <img src={srcImg} alt="Café" />
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <h3>{productName}</h3>
      <p>{description}</p>

      <footer>
        <span className="price">{formatPrice(price)}</span>

        <div>
          <Counter amount={amount} setAmount={setAmount} />

          <button onClick={addToCart} disabled={amount === 0}>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </footer>
    </MenuCardContainer>
  );
}
