import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";
import { Separator } from "../ui/separator";
import { RatingStars } from "./RatingStars";
import { useProduct } from "@/hooks/ProductContext.hook";
import { Button } from "../ui/button";
import { RefreshCcw } from "lucide-react";

type MaxPriceType = number;

export const FilterComponent = () => {
  const [maxPrice, setMaxPrice] = useState<MaxPriceType>(100);

  const { categoryList, refresh } = useProduct();

  return (
    <div className="flex flex-col w-full gap-[24px]">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[16px] items-start">
        <div className="flex flex-col gap-[8px] w-full">
          <span className="dark:text-neutral-400 text-neutral-700">
            Filter by category
          </span>
          <Select className="w-full">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent className="dark:text-neutral-400 text-neutral-700">
              {categoryList.map((category) => (
                <SelectItem value={category} key={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-[8px] w-full">
          <span className="dark:text-neutral-400 text-neutral-700">
            Filter by rate
          </span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Starting from" />
            </SelectTrigger>
            <SelectContent className="dark:text-neutral-400 text-neutral-700">
              <SelectItem value="5">
                <RatingStars count={5} />
              </SelectItem>
              <SelectItem value="4">
                <RatingStars count={4} />
              </SelectItem>
              <SelectItem value="3">
                <RatingStars count={3} />
              </SelectItem>
              <SelectItem value="2">
                <RatingStars count={2} />
              </SelectItem>
              <SelectItem value="1">
                <RatingStars count={1} />
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-[8px] w-full">
          <span className="dark:text-neutral-400 text-neutral-700">
            Filter by price
          </span>
          <span className="text-sm dark:text-neutral-400 text-neutral-700">
            USD {maxPrice}
          </span>
          <Slider
            defaultValue={[100]}
            inverted={false}
            max={100}
            step={0.1}
            // onValueCommit={(e) => setMaxPrice(e)}
          />
        </div>
        <Button size={"icon"} variant={"outline"} onClick={() => refresh()}>
          <RefreshCcw />
        </Button>
      </div>
      <Separator />
    </div>
  );
};
