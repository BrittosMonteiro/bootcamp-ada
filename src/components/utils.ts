import { CartItem } from "@/context/CartProvider.context";
import { Product } from "@/context/ProductProvider.context";

export const findItemInCart = (id: Product["id"], cart: CartItem[]) =>
  cart.find((e) => e.product.id === id);
