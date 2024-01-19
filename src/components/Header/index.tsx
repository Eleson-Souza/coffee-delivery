import { MapPin } from "phosphor-react";

import { HeaderContainer } from "./styled";
import logo from "../../assets/Logo.svg";
import { CartBadge } from "../CartBadge";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";

export function Header() {
  const { cart, order } = useContext(ShoppingCartContext);

  const quantItens = cart.length;

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="info">
        {order && (
          <div>
            <MapPin weight="fill" />
            {order.address.city}, {order.address.uf}
          </div>
        )}

        {quantItens > 0 && (
          <Link to="/checkout">
            <CartBadge amount={quantItens} />
          </Link>
        )}

        {quantItens === 0 && (
          <div title="Nenhum item adicionado no carrinho">
            <CartBadge amount={quantItens} />
          </div>
        )}
      </div>
    </HeaderContainer>
  );
}
