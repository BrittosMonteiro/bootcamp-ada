"use client";

import { FilterComponent } from "@/components/custom/FilterComponent";
import HeaderComponent from "@/components/custom/HeaderComponent";
import { MainContentComponent } from "@/components/custom/MainContentComponent";
import { PaginationComponent } from "@/components/custom/PaginationComponent";
import { ProductsListComponent } from "@/components/custom/ProductsListComponent";
import { useProduct } from "@/hooks/ProductContext.hook";

export default function Home() {
  const { currentPage } = useProduct();

  return (
    <main className="flex min-h-screen flex-col items-start gap-[24px]">
      <HeaderComponent />
      <MainContentComponent>
        <div className="flex flex-col">
          <span className="text-3xl font-semibold dark:text-neutral-400 text-neutral-700">
            Products
          </span>
          <span className="text-sm dark:text-neutral-400 text-neutral-700">
            1000 products found
          </span>
        </div>
        <FilterComponent />
        <PaginationComponent pageNumber={currentPage} />
        <ProductsListComponent />
        <PaginationComponent pageNumber={currentPage} />
      </MainContentComponent>
    </main>
  );
}
