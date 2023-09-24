"use client";

import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "../ui/separator";
import ThemeSwitcher from "./ThemeSwitcher";

export default function HeaderComponent() {
  return (
    <div className="flex flex-col w-full dark:bg-black bg-cyan-500 sticky top-0">
      <div className="flex max-w-sm:flex-col w-full container items-center justify-between max-w-md:px-[16px] py-[16px]">
        <span className="text-xl font-semibold text-white">ADA+CIELO</span>
        <div className="flex items-center gap-[16px]">
          <Button
            variant="outline"
            size="icon"
            onClick={() => console.log("teste")}
          >
            <ShoppingCart className="dark:text-white text-black" />
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
      <Separator />
    </div>
  );
}