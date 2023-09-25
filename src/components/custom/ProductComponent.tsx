import React, { useState } from "react";
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
import { Input } from "../ui/input";
import {
  Minus,
  Plus,
  ShoppingCart,
  ShoppingCartIcon,
  Trash,
} from "lucide-react";
import { useCart } from "@/hooks/CartContext.hook";

interface ProductProps {
  product: Product;
}

export const ProductComponent = ({ product }: ProductProps) => {
  const [qty, setQty] = useState<number>(1);
  const { addToCart, removeFromCart } = useCart();

  return (
    <Card className="w-full max-w-[400px] min-w-[300px] max-w-sm:mx-auto flex flex-col justify-between p-[16px] gap-[24px] rounded-sm">
      <CardContent className="flex flex-col gap-[24px] items-start rounded-sm p-0">
        <Image
          src={product.avatar}
          alt={product.name}
          width={400}
          height={400}
        />
        <Badge>{product.category}</Badge>
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
            <DialogHeader className="p-0">
              <DialogTitle>{product.name}</DialogTitle>
              <DialogDescription>{product.description}</DialogDescription>
            </DialogHeader>

            <RatingStars count={Math.floor(product.rating)} />
            
            <DialogFooter
              className="flex p-0"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex rounded border">
                <Button
                  className="rounded-none"
                  variant={"ghost"}
                  size={"icon"}
                  disabled={qty === 1}
                  onClick={() => setQty(qty - 1)}
                >
                  <Minus />
                </Button>
                <Input
                  className="rounded-none border-none w-[50px] outline-[0] text-center"
                  value={qty}
                  min={0}
                />
                <Button
                  className="rounded-none"
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => setQty(qty + 1)}
                >
                  <Plus />
                </Button>
              </div>
              <div className="flex gap-4">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  disabled={!(qty >= 1)}
                  onClick={() => addToCart(product, qty)}
                  title="Add to cart"
                >
                  <ShoppingCartIcon />
                </Button>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="hover:bg-red-500"
                  onClick={() => removeFromCart(product.id)}
                >
                  <Trash />
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
