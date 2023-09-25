import { CartContext } from "@/context/CartProvider.context";
import { useContext } from "react";

export const useCart = () => useContext(CartContext);
