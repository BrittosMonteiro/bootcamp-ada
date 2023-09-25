"use client";

import HeaderComponent from "@/components/custom/HeaderComponent";
import { MainContentComponent } from "@/components/custom/MainContentComponent";

export default function Cart() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-[24px]">
      <HeaderComponent />
      <MainContentComponent>
        <div className="flex flex-col">
          <span className="text-3xl font-semibold dark:text-neutral-400 text-neutral-700">
            Cart
          </span>
        </div>
      </MainContentComponent>
    </main>
  );
}
