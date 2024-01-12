import { ReactNode, createContext, useState } from "react";

export interface CartProduct {
  cart: Product[];
  total: number;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (id: string) => void;
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

const ShoppingCartContext = createContext<CartProduct | null>(null);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  function addItemToCart(product: Product) {
    setCart((state) => [...state, product]);
  }

  function removeItemFromCart(id: string) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function calculateCartTotal() {
    const totalPrice = cart.reduce((acc, current) => {
      return acc + current.price * current.amount;
    }, 0);

    setTotal(totalPrice);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        total,
        addItemToCart,
        removeItemFromCart,
        calculateCartTotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
