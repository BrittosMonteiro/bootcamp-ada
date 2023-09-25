"use client";

import { Separator } from "../ui/separator";
import ThemeSwitcher from "./ThemeSwitcher";
import { ShoppingCartComponent } from "./ShoppingCartComponent";

export default function HeaderComponent() {

  return (
    <div className="flex flex-col w-full dark:bg-black bg-cyan-500 sticky top-0">
      <div className="flex max-w-sm:flex-col w-full container items-center justify-between max-w-md:px-[16px] py-[16px]">
        <span className="text-xl font-semibold text-white">ADA+CIELO</span>
        <div className="flex items-center gap-[16px]">
          <ShoppingCartComponent />
          <ThemeSwitcher />
        </div>
      </div>
      <Separator />
    </div>
  );
}
