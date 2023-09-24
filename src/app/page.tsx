"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-start gap-[24px]"></main>
  );
}
