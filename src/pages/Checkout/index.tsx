import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { CheckoutContainer } from "./styled";
import { PaymentMethodCard } from "./components/PaymentMethodCard";
import { Cart } from "./components/Cart";

import espresso from "../../assets/expresso.svg";
import latte from "../../assets/latte.svg";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();

  function handleOrderConfirm() {
    navigate("/order-confirmation");
  }

  return (
    <CheckoutContainer>
      <section>
        <h3>Complete der pedido</h3>

        <div className="boxes">
          <div className="box delivery-address">
            <header>
              <MapPinLine />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <form>
              <input
                type="text"
                placeholder="CEP"
                style={{ width: "12.5rem" }}
              />

              <input type="text" placeholder="Rua" />

              <div className="form-group home">
                <input type="number" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>

              <div className="form-group city">
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </div>
            </form>
          </div>

          <div className="box payment-method">
            <header>
              <CurrencyDollar />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <div className="methods">
              <PaymentMethodCard
                icon={<CreditCard />}
                title="Cartão de Crédito"
              />
              <PaymentMethodCard icon={<Bank />} title="Cartão de Débito" />
              <PaymentMethodCard icon={<Money />} title="Dinheiro" />
            </div>
          </div>
        </div>
      </section>

      <aside>
        <h3>Cafés selecionados</h3>

        <div className="box product-item">
          <Cart
            srcImg={espresso}
            title="Expresso Tradicional"
            amount={2}
            price={9.9}
          />
          <hr />
          <Cart srcImg={latte} title="Latte" amount={1} price={19.8} />
          <hr />

          <div className="total">
            <div className="sub-item">
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div className="sub-item">
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div className="sub-item sub-item-total">
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </div>

          <button className="btn-order" onClick={handleOrderConfirm}>
            Confirmar Pedido
          </button>
        </div>
      </aside>
    </CheckoutContainer>
  );
}
