import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/hooks/CartContext.hook";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import ShoppingCartItemComponent from "./ShoppingCartItemComponent";
import { ScrollArea } from "../ui/scroll-area";
import {useRouter} from 'next/navigation';

export const ShoppingCartComponent = () => {
  const { cart, clearCart, getCartQty } = useCart();
  const router = useRouter()

  return (
    <Sheet>
      <SheetTrigger className="flex gap-2 border rounded p-2 dark:bg-background dark:hover:bg-neutral-800">
        <ShoppingCart className="dark:text-white text-black" />
        {getCartQty() > 0 && <span>{getCartQty()}</span>}
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          {cart.length > 0 && (
            <SheetDescription asChild>
              <Button variant={"link"} onClick={() => router.push('/cart')}>Go to cart</Button>
            </SheetDescription>
          )}
        </SheetHeader>
        {cart.length === 0 && <span>Your cart is empty</span>}
        <ScrollArea className="flex flex-col">
          {cart.map((product, index) => (
            <>
              <ShoppingCartItemComponent cartItem={product} />
              {index < cart.length - 1 && <Separator />}
            </>
          ))}
        </ScrollArea>
        {cart.length > 0 && (
          <Button
            onClick={() => clearCart()}
            variant={"outline"}
            className="hover:bg-red-500"
          >
            Clear cart
          </Button>
        )}
      </SheetContent>
    </Sheet>
  );
};
