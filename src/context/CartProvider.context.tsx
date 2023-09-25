"use client";
import { ReactNode, createContext, useState } from "react";
import { Product } from "./ProductProvider.context";
import { findItemInCart } from "@/components/utils";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextProps {
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: Product["id"]) => void;
  clearCart: () => void;
  getCartQty: () => number;
  cart: CartItem[];
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    const isInCart = findItemInCart(product.id, cart);
    if (isInCart) {
      increaseQtyById(product.id, quantity);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (id: Product["id"]) => {
    const isInCart = findItemInCart(id, cart);
    if (isInCart) {
      const updatedCart = cart.filter((e) => e.product.id !== id);
      updateCart(updatedCart);
    }
  };

  const clearCart = () => {
    updateCart([]);
  };

  const increaseQtyById = (id: Product["id"], quantity: number): void => {
    const updatedCartQuantity = cart.map((item) => {
      if (item.product.id === id) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });
    updateCart(updatedCartQuantity);
  };

  const getCartQty = () => {
    return cart.reduce((acc, cur) => acc + cur.quantity, 0);
  };

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, clearCart, getCartQty, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};
