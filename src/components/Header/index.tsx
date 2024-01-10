import { MapPin } from "phosphor-react";

import { HeaderContainer } from "./styled";
import logo from "../../assets/Logo.svg";
import { CartBadge } from "../CartBadge";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />

      <div className="info">
        <div>
          <MapPin weight="fill" />
          Praia Grande, SP
        </div>

        <Link to="/checkout">
          <CartBadge amount={3} />
        </Link>
      </div>
    </HeaderContainer>
  );
}
