import { ReactNode, createContext, useState } from "react";

export const deliveryPrice = 5;

export interface CartProduct {
  cart: Product[];
  totalItens: number;
  total: number;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (id: string) => void;
  updateItemFromCart: (id: string, product: Product) => void;
  calculateCartTotal: () => void;
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

const initialValue: CartProduct = {
  cart: [],
  totalItens: 0,
  total: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemFromCart: () => {},
  calculateCartTotal: () => {},
};

export const ShoppingCartContext = createContext<CartProduct>(initialValue);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalItens, setTotalItens] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

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

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        totalItens,
        total,
        addItemToCart,
        removeItemFromCart,
        updateItemFromCart,
        calculateCartTotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
