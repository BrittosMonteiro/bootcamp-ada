"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "./ProductProvider.context";
import { findItemInCart } from "@/components/utils";
import { getCartStore, removeStore, setCartStore } from "@/utils/cartStore";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextProps {
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: Product["id"]) => void;
  increaseQtyById: (id: Product["id"], quantity: number) => void;
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

  useEffect(() => {
    const cartStore = getCartStore();
    if (cartStore) setCart(cartStore);
  }, []);

  const addToCart = (product: Product, quantity: number): void => {
    const isInCart = findItemInCart(product.id, cart);
    if (isInCart) {
      increaseQtyById(product.id, quantity);
    } else {
      setCartStore([...cart, { product, quantity }]);
      updateCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (id: Product["id"]): void => {
    const isInCart = findItemInCart(id, cart);
    if (isInCart) {
      const updatedCart = cart.filter((e) => e.product.id !== id);
      setCartStore(updatedCart);
      updateCart(updatedCart);
    }
  };

  const clearCart = () => {
    removeStore();
    updateCart([]);
  };

  const increaseQtyById = (id: Product["id"], quantity: number): void => {
    const updatedCartQuantity = cart.map((item) => {
      if (item.product.id === id) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });
    setCartStore(updatedCartQuantity);
    updateCart(updatedCartQuantity);
  };

  const getCartQty = (): number => {
    return cart.reduce((acc, cur) => acc + cur.quantity, 0);
  };

  const updateCart = (newCart: CartItem[]): void => {
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        increaseQtyById,
        clearCart,
        getCartQty,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
