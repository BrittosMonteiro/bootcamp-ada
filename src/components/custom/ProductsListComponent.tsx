import React from "react";
import { ProductComponent } from "./ProductComponent";
import { useProduct } from "@/hooks/ProductContext.hook";

export const ProductsListComponent: React.FC = () => {
  const { productList } = useProduct();

  return (
    <div className="grid gap-[32px] max-w-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {productList.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
};
