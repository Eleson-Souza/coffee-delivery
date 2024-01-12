import { ShoppingCart } from "phosphor-react";

import { MenuCardContainer } from "./styled";
import { Counter } from "../../../../components/Counter";
import { useState } from "react";
import { MenuCardItem } from "../../../../constants/products";

interface MenuCardProps extends MenuCardItem {}

export function MenuCard({
  id,
  srcImg,
  productName,
  description,
  tags,
  price,
}: MenuCardProps) {
  const [amount, setAmount] = useState(0);

  function formatPrice(price: number): string {
    const options: Intl.NumberFormatOptions = {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    };

    return Intl.NumberFormat("pt-BR", options).format(price);
  }

  function addToCart() {
    console.log(
      `Produto ${productName} adicionado ${amount} vezes no carrinho!`
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

          <button onClick={addToCart}>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </footer>
    </MenuCardContainer>
  );
}
