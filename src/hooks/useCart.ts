import { useContext } from "react";
import { CartContext } from "./CartProvider";
import type { CartContextType } from "./CartProvider";

const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export default useCart;
