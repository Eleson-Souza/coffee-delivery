import { NoOrderContainer } from "./styled";
import EmptyCartImg from "../../../../assets/empty-cart.png";

export function NoOrder() {
  return (
    <NoOrderContainer>
      <img src={EmptyCartImg} alt="Carrinho vazio" />
      <span>Não existe nenhum pedido no momento</span>
    </NoOrderContainer>
  );
}
