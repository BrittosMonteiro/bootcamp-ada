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
      {children}
    </div>
  );
};
