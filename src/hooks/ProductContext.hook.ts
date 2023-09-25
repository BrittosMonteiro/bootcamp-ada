import { ProductContext } from "@/context/ProductProvider.context";
import { useContext } from "react";

export const useProduct = () => useContext(ProductContext);
