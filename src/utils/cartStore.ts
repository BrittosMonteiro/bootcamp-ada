import { CartItem } from "@/context/CartProvider.context";

export const setCartStore = (cart: CartItem[]): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartStore = (): CartItem[] | null => {
  const cartContent = localStorage.getItem("cart");
  if (cartContent) {
    return JSON.parse(cartContent);
  }
  return [];
};

export const removeStore = () => localStorage.removeItem("cart");
