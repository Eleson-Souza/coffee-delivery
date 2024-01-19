import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { OrderInfoFormContainer } from "./styled";
import { useFormContext } from "react-hook-form";
import * as zod from "zod";
import { PaymentMethod } from "../../../../constants/products";
import { useContext, useEffect } from "react";
import { getAddressByCep } from "../../../../services/cep";
import {
  Address,
  ShoppingCartContext,
} from "../../../../context/ShoppingCartContext";

export const zodSchema = zod.object({
  cep: zod.string().nullish(),
  street: zod.string().min(1, "O nome da rua é obrigatório"),
  number: zod.string().min(1, "O número é obrigatório"),
  complement: zod.string().nullish(),
  neighborhood: zod.string().min(1, "O nome do bairro é obrigatório"),
  city: zod.string().min(1, "O nome da cidade é obrigatório"),
  uf: zod.string().min(1, "A UF é obrigatória"),
  paymentMethod: zod.string().min(1, "Selecione uma forma de pagamento"),
});

export type OrderInfo = zod.infer<typeof zodSchema>;

export function OrderInfoForm() {
  const { order } = useContext(ShoppingCartContext);

  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<OrderInfo>();

  const cep = watch("cep");
  const paymentMethod = watch("paymentMethod");

  useEffect(() => {
    if (order) {
      const {
        address: { city, neighborhood, street, uf, cep, complement, number },
        paymentMethod,
      } = order;

      setAddressFields({
        cep,
        street,
        number,
        complement,
        neighborhood,
        city,
        uf,
      });
      setValue("paymentMethod", paymentMethod);
    }
  }, [order]);

  useEffect(() => {
    (async () => {
      if (cep?.length === 8 || cep?.length === 9) {
        const cepValue = cep.replace("-", "");
        const response = await getAddressByCep(cepValue);

        if (!response.erro) {
          const { cep, bairro, localidade, logradouro, uf } = response;

          setAddressFields({
            cep: cep!,
            street: logradouro!,
            number: watch("number"),
            complement: watch("complement"),
            neighborhood: bairro!,
            city: localidade!,
            uf: uf!,
          });
        }
      }
    })();
  }, [cep]);

  function setAddressFields(data: Address) {
    setValue("cep", data.cep);
    setValue("street", data.street);
    setValue("number", data.number);
    setValue("complement", data.complement);
    setValue("neighborhood", data.neighborhood);
    setValue("city", data.city);
    setValue("uf", data.uf);
  }

  function handleChangePaymentMethod(method: PaymentMethod) {
    setValue("paymentMethod", method);
  }

  return (
    <OrderInfoFormContainer>
      <div className="delivery-address">
        <header>
          <MapPinLine />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>

        <div className="form">
          <div>
            <input
              {...register("cep")}
              type="string"
              placeholder="CEP"
              autoComplete="new-password"
              style={{ width: "12.5rem" }}
            />
            <span className="error">{errors.cep?.message}</span>
          </div>

          <div>
            <input
              {...register("street")}
              type="text"
              placeholder="Rua"
              autoComplete="new-password"
              style={{ width: "100%" }}
            />
            <span className="error">{errors.street?.message}</span>
          </div>

          <div className="form-group home">
            <input
              {...register("number")}
              type="text"
              placeholder="Número"
              autoComplete="new-password"
            />
            <input
              {...register("complement")}
              type="text"
              placeholder="Complemento"
              autoComplete="new-password"
            />
          </div>

          <div className="form-group city">
            <div>
              <input
                {...register("neighborhood")}
                type="text"
                placeholder="Bairro"
                autoComplete="new-password"
              />
              <span className="error">{errors.neighborhood?.message}</span>
            </div>
            <div>
              <input
                {...register("city")}
                type="text"
                placeholder="Cidade"
                autoComplete="new-password"
              />
              <span className="error">{errors.city?.message}</span>
            </div>
            <div>
              <input
                {...register("uf")}
                className="upper"
                type="text"
                placeholder="UF"
                autoComplete="new-password"
              />
              <span className="error">{errors.uf?.message}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-methods">
        <header>
          <CurrencyDollar />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </header>

        <div className="methods">
          <button
            type="button"
            className={paymentMethod === PaymentMethod.CREDIT ? "active" : ""}
            onClick={() => handleChangePaymentMethod(PaymentMethod.CREDIT)}
          >
            <CreditCard />
            {PaymentMethod.CREDIT}
          </button>
          <button
            type="button"
            className={paymentMethod === PaymentMethod.DEBIT ? "active" : ""}
            onClick={() => handleChangePaymentMethod(PaymentMethod.DEBIT)}
          >
            <Bank />
            {PaymentMethod.DEBIT}
          </button>
          <button
            type="button"
            className={paymentMethod === PaymentMethod.MONEY ? "active" : ""}
            onClick={() => handleChangePaymentMethod(PaymentMethod.MONEY)}
          >
            <Money />
            {PaymentMethod.MONEY}
          </button>
        </div>
        <span className="error">{errors.paymentMethod?.message}</span>
      </div>
    </OrderInfoFormContainer>
  );
}
