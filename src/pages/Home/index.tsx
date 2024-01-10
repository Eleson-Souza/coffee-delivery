import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { AdvantageItem } from "./components/AdvantageItem";
import { HomeContainer } from "./styled";

import coffeeDeliveryImg from "../../assets/coffee-delivery-landing.svg";
import { MenuCard } from "./components/MenuCard";
import { menuItems } from "../../constants/products";

export function Home() {
  return (
    <HomeContainer>
      <section>
        <div className="landing-info">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="advantages">
            <div>
              <AdvantageItem
                icon={<ShoppingCart weight="fill" />}
                text="Compra simples e segura"
                color="#C47F17"
              />
              <AdvantageItem
                icon={<Timer weight="fill" />}
                text="Entrega rápida e rastreada"
                color="#DBAC2C"
              />
            </div>
            <div>
              <AdvantageItem
                icon={<Package weight="fill" />}
                text="Embalagem mantém o café intacto"
                color="#574F4D"
              />
              <AdvantageItem
                icon={<Coffee weight="fill" />}
                text="O café chega fresquinho até você"
                color="#8047F8"
              />
            </div>
          </div>
        </div>

        <figure>
          <img src={coffeeDeliveryImg} alt="" />
        </figure>
      </section>

      <section>
        <h2>Nossos Cafés</h2>

        <div>
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              srcImg={item.srcImg}
              productName={item.productName}
              description={item.description}
              tags={item.tags}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </HomeContainer>
  );
}
