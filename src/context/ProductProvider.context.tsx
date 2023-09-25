"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

export interface Product {
  id: string;
  name: string;
  avatar: string;
  description: string;
  price: string;
  rating: number;
  category: string;
}

interface ProductContextProps {
  filter: () => void;
  refresh: () => void;
  changePage: (pageNumber: number) => Promise<void>;
  productList: Product[];
  categoryList: string[];
  currentPage: number;
}

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productList, setProductList] = useState<Product[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchData = async (pageNumber: number = 1, pageSize: number = 12) => {
    setIsLoading(true);

    const API_CALL: string = `${process.env.API_ADDRESS}/products?pageSize=${pageSize}&pageNumber=${pageNumber}`;

    await fetch(API_CALL)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setProductList(res);
        getCategories(res);
        setCurrentPage(pageNumber);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getCategories = (products: Product[]) => {
    const categories = products.map((product) => {
      return product.category;
    });

    setCategoryList([...new Set(categories)]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filter = () => {};
  const refresh = () => {};
  return (
    <ProductContext.Provider
      value={{
        filter,
        refresh: fetchData,
        changePage: fetchData,
        productList,
        categoryList,
        currentPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
