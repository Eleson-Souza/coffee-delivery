import { MapPin } from "phosphor-react";

import { HeaderContainer } from "./styled";
import logo from "../../assets/Logo.svg";
import { CartBadge } from "../CartBadge";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";

export function Header() {
  const { cart } = useContext(ShoppingCartContext);

  const quantItens = cart.length;

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />

      <div className="info">
        <div>
          <MapPin weight="fill" />
          Praia Grande, SP
        </div>

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
