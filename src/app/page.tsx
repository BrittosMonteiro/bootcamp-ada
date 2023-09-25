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
        <FilterComponent />
        <PaginationComponent pageNumber={currentPage} />
        <ProductsListComponent />
        <PaginationComponent pageNumber={currentPage} />
      </MainContentComponent>
    </main>
  );
}
