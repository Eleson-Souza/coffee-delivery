import { ReactNode, createContext, useEffect, useState } from "react";
import { PaymentMethod } from "../constants/products";

export const deliveryPrice = 5;

export interface CartProduct {
  cart: Product[];
  totalItens: number;
  total: number;
  order: OrderInfo | null;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (id: string) => void;
  updateItemFromCart: (id: string, product: Product) => void;
  calculateCartTotal: () => void;
  createOrder: (order: OrderInfo) => void;
}

export interface Product {
  id: string;
  srcImg: string;
  productName: string;
  description: string;
  tags: string[];
  price: number;
  amount: number;
  total: number;
}

export interface Address {
  cep?: string | null;
  street: string;
  number: string;
  complement?: string | null;
  neighborhood: string;
  city: string;
  uf: string;
}

interface OrderInfo {
  address: Address;
  paymentMethod: PaymentMethod;
}

const initialValue: CartProduct = {
  cart: [],
  totalItens: 0,
  total: 0,
  order: null,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemFromCart: () => {},
  calculateCartTotal: () => {},
  createOrder: () => {},
};

export const ShoppingCartContext = createContext<CartProduct>(initialValue);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalItens, setTotalItens] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [order, setOrder] = useState<OrderInfo | null>(null);

  // localStorage
  useEffect(() => {
    const data = localStorage.getItem("coffee-delivery_shopping-cart-data");

    if (data) {
      const product: CartProduct = JSON.parse(data);

      setCart(product.cart);
      setTotal(product.totalItens);
      setTotal(product.total);
      setOrder(product.order);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const data = {
        cart,
        totalItens,
        total,
        order,
      };

      localStorage.setItem(
        "coffee-delivery_shopping-cart-data",
        JSON.stringify(data)
      );
    }
  }, [cart, total, order]);

  function addItemToCart(product: Product) {
    setCart((state) => [...state, product]);
  }

  function removeItemFromCart(id: string) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function updateItemFromCart(id: string, product: Product) {
    setCart(cart.map((item) => (item.id === id ? product : item)));
  }

  function calculateCartTotal() {
    const totalItensPrice = cart.reduce((acc, current) => {
      return acc + current.price * current.amount;
    }, 0);

    setTotalItens(totalItensPrice);
    setTotal(totalItensPrice + deliveryPrice);
  }

  function createOrder(order: OrderInfo) {
    setOrder(order);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        totalItens,
        total,
        order,
        addItemToCart,
        removeItemFromCart,
        updateItemFromCart,
        calculateCartTotal,
        createOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
