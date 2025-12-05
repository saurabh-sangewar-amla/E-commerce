import React, { createContext, useState } from 'react'

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
  totalQuantity: number;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev: CartItem[]) => {
      const exists = prev.find((p: CartItem) => p.id === item.id);
      if (exists) {
        return prev.map((p: CartItem) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prev: CartItem[]) =>
      prev.map((p: CartItem) => (p.id === id ? { ...p, quantity } : p))
    );
  };

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  return (
     <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider