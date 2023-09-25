"use client";
import React, { ReactNode, useEffect, useState } from "react";
// import ProductsListComponent from "@/components/ProductsListComponent";
// import PaginationComponent from "./PaginationComponent";
import { Button } from "../ui/button";
import { LucideLoader2 } from "lucide-react";

interface Content {
  children: ReactNode;
}

export const MainContentComponent: React.FC<Content> = ({ children }) => {
  return (
    <div className="flex flex-col w-full container gap-[24px] pb-[24px]">
      <div className="flex flex-col">
        <span className="text-3xl font-semibold dark:text-neutral-400 text-neutral-700">
          Products
        </span>
        <span className="text-sm dark:text-neutral-400 text-neutral-700">
          1000 products found
        </span>
      </div>
      {children}
    </div>
  );
};
