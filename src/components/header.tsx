import Link from "next/link";

import { CircleQuestionMark, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container h-17 flex items-center mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <CircleQuestionMark />
              Secret-Circle
            </Link>
          </div>
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile Navigation
                </SheetDescription>
              </SheetHeader>
              <div className="mt-5 px-4">
                <nav className="flex flex-col items-center gap-2 mb-3">
                  <SheetTrigger asChild>
                    <Link href="/" className="w-full text-center py-3">
                      Home
                    </Link>
                  </SheetTrigger>

                  <SheetTrigger asChild>
                    <Link
                      href="#how-it-works"
                      className="w-full text-center py-3"
                    >
                      How it Works
                    </Link>
                  </SheetTrigger>
                </nav>
                <div className="flex flex-col gap-4">
                  <SheetTrigger asChild>
                    <Button>Create Exchange</Button>
                  </SheetTrigger>
                  <div className="flex items-center justify-between">
                    <span>Theme Toggle</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <nav className="hidden lg:flex-1 lg:flex lg:justify-center">
            <div className="flex items-center gap-6">
              <Link href="#">Home</Link>
              <Link href="#how-it-works">How it Works</Link>
            </div>
          </nav>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-4">
            <Button>Create Exchange</Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
