import React from "react";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useProduct } from "@/hooks/ProductContext.hook";

interface PaginationProps {
  pageNumber: number;
}

export const PaginationComponent: React.FC<PaginationProps> = ({
  pageNumber,
}) => {
  const { changePage, currentPage } = useProduct();

  return (
    <div className="flex mx-auto gap-[8px]">
      <Button
        size="icon"
        variant={"outline"}
        disabled={currentPage === 1}
        onClick={() => changePage(pageNumber - 1)}
      >
        <ArrowLeftIcon />
      </Button>
      <Button size="icon" variant={"outline"}>
        {pageNumber}
      </Button>
      <Button
        size="icon"
        variant={"outline"}
        onClick={() => changePage(pageNumber + 1)}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
};
