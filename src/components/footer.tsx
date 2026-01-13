"use client";

import { ArrowUp, CircleQuestionMark } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary/40">
      <div className="container mx-auto px-4 max-w-7xl pt-12">
        <div className="flex flex-wrap justify-between gap-7">
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 text-2xl font-semibold"
            >
              <CircleQuestionMark />
              Secret-Circle
            </Link>
            <p className="md:max-w-62.5 text-muted-foreground leading-7">
              Making gift exchanges simple, private, and fun for everyone.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Quick Links</h2>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <Link href="/">Home</Link>
              <Link href="#how-it-works">How it Works</Link>
            </div>
          </div>
          <Button
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Back to Top <ArrowUp />
          </Button>
        </div>
        <div className="border-t text-center mt-6">
          <p className="py-6 text-sm text-center text-muted-foreground">
            © 2026 Secret-Circle. All rights reserved. Made with ❤️ for gift
            exchanges everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
