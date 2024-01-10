import { MapPin, Money, Timer } from "phosphor-react";
import { OrderConfirmationContainer } from "./styled";
import { OrderInfo } from "./components/OrderInfo";

import orderSuccessImg from "../../assets/order-success.svg";

export function OrderConfirmation() {
  return (
    <OrderConfirmationContainer>
      <h1>Uhu! Pedido Confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <section>
        <div>
          <div className="address">
            <div className="icon">
              <MapPin weight="fill" />
            </div>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>

          <div className="delivery">
            <div className="icon">
              <Timer weight="fill" />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div className="payment">
            <div className="icon">
              <Money weight="fill" />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>

        <img src={orderSuccessImg} alt="" />
      </section>
    </OrderConfirmationContainer>
  );
}
