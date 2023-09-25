"use client";

import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "../ui/separator";
import ThemeSwitcher from "./ThemeSwitcher";
import { useCart } from "@/hooks/CartContext.hook";

export default function HeaderComponent() {
  const { getCartQty } = useCart();
  
  return (
    <div className="flex flex-col w-full dark:bg-black bg-cyan-500 sticky top-0">
      <div className="flex max-w-sm:flex-col w-full container items-center justify-between max-w-md:px-[16px] py-[16px]">
        <span className="text-xl font-semibold text-white">ADA+CIELO</span>
        <div className="flex items-center gap-[16px]">
          <Button
            variant="outline"
            onClick={() => console.log("teste")}
            className="gap-2"
          >
            <ShoppingCart className="dark:text-white text-black" />
            {getCartQty() > 0 && <span>{getCartQty()}</span>}
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
      <Separator />
    </div>
  );
}
