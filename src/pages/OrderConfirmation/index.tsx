import { MapPin, Money, Timer } from "phosphor-react";
import { OrderConfirmationContainer } from "./styled";

import orderSuccessImg from "../../assets/order-success.svg";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { NoOrder } from "./components/NoOrder/NoOrder";

export function OrderConfirmation() {
  const { order } = useContext(ShoppingCartContext);

  if (!order) {
    return <NoOrder />;
  }

  const {
    address: { street, number, neighborhood, city, uf },
    paymentMethod,
  } = order;

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
                Entrega em{" "}
                <strong>
                  {street}, {number}
                </strong>
              </span>
              <span>
                {neighborhood} - {city}, {uf}
              </span>
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
              <strong>{paymentMethod}</strong>
            </div>
          </div>
        </div>

        <img src={orderSuccessImg} alt="" />
      </section>
    </OrderConfirmationContainer>
  );
}
