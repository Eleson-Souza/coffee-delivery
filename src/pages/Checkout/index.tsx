import { CheckoutContainer } from "./styled";
import { Cart } from "./components/Cart";

import { Link, useNavigate } from "react-router-dom";
import { Fragment, useContext, useEffect } from "react";
import {
  ShoppingCartContext,
  deliveryPrice,
} from "../../context/ShoppingCartContext";
import { formatPrice } from "../../utils/formatNumber";
import {
  OrderInfo,
  OrderInfoForm,
  zodSchema,
} from "./components/OrderInfoForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentMethod } from "../../constants/products";

export function Checkout() {
  const { createOrder } = useContext(ShoppingCartContext);

  const methodsForm = useForm<OrderInfo>({
    resolver: zodResolver(zodSchema),
  });

  const { handleSubmit } = methodsForm;

  const { cart, totalItens, total, calculateCartTotal } =
    useContext(ShoppingCartContext);
  const navigate = useNavigate();

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  function handleOrderConfirm(formData: OrderInfo) {
    const {
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      uf,
      paymentMethod,
    } = formData;

    createOrder({
      address: {
        cep,
        street,
        number,
        complement,
        neighborhood,
        city,
        uf,
      },
      paymentMethod: paymentMethod as PaymentMethod,
    });

    navigate("/order-confirmation");
  }

  return (
    <CheckoutContainer>
      <FormProvider {...methodsForm}>
        <form onSubmit={handleSubmit(handleOrderConfirm)}>
          <section>
            <h3>Complete der pedido</h3>

            <OrderInfoForm />
          </section>

          <aside>
            <h3>Cafés selecionados</h3>

            <div className="box product-item">
              {totalItens > 0 && (
                <div className="cart-items">
                  {cart.map((item) => (
                    <Fragment key={item.id}>
                      <Cart
                        id={item.id}
                        srcImg={item.srcImg}
                        title={item.productName}
                        amount={item.amount}
                        price={item.price}
                      />
                      <hr />
                    </Fragment>
                  ))}

                  <div className="total">
                    <div className="sub-item">
                      <span>Total de itens</span>
                      <span>{formatPrice(totalItens)}</span>
                    </div>

                    <div className="sub-item">
                      <span>Entrega</span>
                      <span>{formatPrice(deliveryPrice)}</span>
                    </div>

                    <div className="sub-item sub-item-total">
                      <strong>Total</strong>
                      <strong>{formatPrice(total)}</strong>
                    </div>
                  </div>

                  <button type="submit" className="btn-order">
                    Confirmar Pedido
                  </button>
                </div>
              )}

              {totalItens === 0 && (
                <div className="cart-items-none">
                  Seu carrinho de compras está vazio.
                  <Link to="/">Confira os produtos</Link>
                </div>
              )}
            </div>
          </aside>
        </form>
      </FormProvider>
    </CheckoutContainer>
  );
}
