import { Product } from "@/context/ProductProvider.context";
import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { CartItem } from "@/context/CartProvider.context";
import { useCart } from "@/hooks/CartContext.hook";

interface ShoppingCartItemProps {
  cartItem: CartItem;
}

function ShoppingCartItemComponent({ cartItem }: ShoppingCartItemProps) {
  const { increaseQtyById, removeFromCart } = useCart();

  return (
    <div
      className="flex items-start justify-between my-4"
      key={cartItem.product.id}
    >
      <div className="flex flex-col gap-1">
        <span className="">{cartItem.product.name}</span>
        <span className="text-neutral-500">
          Unit price: {cartItem.product.price}
        </span>
        <span className="text-neutral-500">
          Total: {parseFloat(cartItem.product.price) * cartItem.quantity}
        </span>
        <div className="flex flex-col">
          <span className="text-neutral-500">Quantity:</span>
          <div className="flex">
            <Button
              size={"sm"}
              variant={"outline"}
              className="border-none hover:bg-transparent p-0"
              disabled={cartItem.quantity === 1}
              onClick={() => increaseQtyById(cartItem.product.id, -1)}
            >
              <Minus size={18} />
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              className="border-none hover:bg-transparent"
            >
              {cartItem.quantity}
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              className="border-none hover:bg-transparent p-0"
              onClick={() => increaseQtyById(cartItem.product.id, 1)}
            >
              <Plus size={18} />
            </Button>
          </div>
        </div>
      </div>
      <Button
        size={"icon"}
        variant={"outline"}
        className="hover:bg-red-500"
        onClick={() => removeFromCart(cartItem.product.id)}
      >
        <Trash size={20} />
      </Button>
    </div>
  );
}

export default ShoppingCartItemComponent;
