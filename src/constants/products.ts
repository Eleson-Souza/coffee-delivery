import american from "../assets/americano.svg";
import arabe from "../assets/arabe.svg";
import coffeeWithMilk from "../assets/café com leite.svg";
import icedCoffee from "../assets/café gelado.svg";
import capuccino from "../assets/capuccino.svg";
import hotChocolate from "../assets/chocolate quente.svg";
import cuban from "../assets/cubano.svg";
import creamyEspresso from "../assets/expresso cremoso.svg";
import espresso from "../assets/expresso.svg";
import hawaiian from "../assets/havaiano.svg";
import irish from "../assets/irlandes.svg";
import latte from "../assets/latte.svg";
import macchiato from "../assets/macchiato.svg";
import mocaccino from "../assets/mochaccino.svg";
import { Product } from "../context/ShoppingCartContext";

export type MenuCardItem = Omit<Product, "amount" | "total">;

export const menuItems: MenuCardItem[] = [
  {
    id: crypto.randomUUID(),
    srcImg: espresso,
    productName: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["TRADICIONAL"],
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    srcImg: american,
    productName: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["TRADICIONAL"],
    price: 11.5,
  },
  {
    id: crypto.randomUUID(),
    srcImg: creamyEspresso,
    productName: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["TRADICIONAL"],
    price: 12.25,
  },
  {
    id: crypto.randomUUID(),
    srcImg: icedCoffee,
    productName: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["TRADICIONAL", "GELADO"],
    price: 15.89,
  },
  {
    id: crypto.randomUUID(),
    srcImg: coffeeWithMilk,
    productName: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 20.99,
  },
  {
    id: crypto.randomUUID(),
    srcImg: latte,
    productName: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 20.99,
  },
  {
    id: crypto.randomUUID(),
    srcImg: capuccino,
    productName: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 21.99,
  },
  {
    id: crypto.randomUUID(),
    srcImg: macchiato,
    productName: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 20.99,
  },
  {
    id: crypto.randomUUID(),
    srcImg: mocaccino,
    productName: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 25.5,
  },
  {
    id: crypto.randomUUID(),
    srcImg: hotChocolate,
    productName: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["ESPECIAL", "COM LEITE"],
    price: 30,
  },
  {
    id: crypto.randomUUID(),
    srcImg: cuban,
    productName: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    price: 35,
  },
  {
    id: crypto.randomUUID(),
    srcImg: hawaiian,
    productName: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["ESPECIAL"],
    price: 30,
  },
  {
    id: crypto.randomUUID(),
    srcImg: arabe,
    productName: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["ESPECIAL"],
    price: 30,
  },
  {
    id: crypto.randomUUID(),
    srcImg: irish,
    productName: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["ESPECIAL", "ALCOÓLICO"],
    price: 35,
  },
];
