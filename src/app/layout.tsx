import { ThemeProvider } from "@/context/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ProductProvider } from "@/context/ProductProvider.context";
import { CartProvider } from "@/context/CartProvider.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ProductProvider>
            <CartProvider>{children}</CartProvider>
          </ProductProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
