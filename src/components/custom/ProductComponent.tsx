import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Product } from "@/context/ProductProvider.context";
import { RatingStars } from "./RatingStars";

interface ProductProps {
  product: Product;
}

export const ProductComponent = ({ product }: ProductProps) => {
  return (
    <Card className="w-full max-w-[400px] min-w-[300px] max-w-sm:mx-auto flex flex-col justify-between p-[16px] gap-[24px] rounded-sm">
      <CardContent className="flex flex-col gap-[24px] items-start rounded-sm p-0">
        <Image
          src={product.avatar}
          alt={product.name}
          width={400}
          height={400}
        />
        <Button size={"badge"}>
          <Badge>{product.category}</Badge>
        </Button>
      </CardContent>

      <CardHeader className="p-0">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between p-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full dark:hover:bg-cyan-500">
              Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{product.name}</DialogTitle>
              <DialogDescription>{product.description}</DialogDescription>
            </DialogHeader>
            <RatingStars count={Math.floor(product.rating)} />
            <DialogFooter>
              <Button type="submit" onClick={() => console.log(product)}>
                Add to cart
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
