import { ShoppingCart } from "phosphor-react";

import { MenuCardContainer } from "./styled";
import { Counter } from "../../../../components/Counter";

export interface MenuCardProps {
  srcImg: string;
  productName: string;
  description: string;
  tags: string[];
  price: number;
}

export function MenuCard({
  srcImg,
  productName,
  description,
  tags,
  price,
}: MenuCardProps) {
  function formatPrice(price: number): string {
    const options: Intl.NumberFormatOptions = {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    };

    return Intl.NumberFormat("pt-BR", options).format(price);
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
          <form>
            <Counter amount={1} />
          </form>

          <button>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </footer>
    </MenuCardContainer>
  );
}
