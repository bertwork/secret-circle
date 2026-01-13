import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { CircleCheck, Users, CalendarDays, Link as CLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-linear-to-r from-primary/40 to-secondary/70"
    >
      <div className="container mx-auto max-w-7xl py-20 px-4">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 text-center flex flex-col gap-6 lg:text-left">
            <h1 className="text-4xl font-semibold 2xl:text-5xl leading-12 md:leading-16">
              Secret Gift Exchange{" "}
              <span className="text-destructive">Made Simple</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Organize Monito/Monita, Secret Santa, or gift exchanges with
              friends, family, or colleagues—no emails or accounts required.
              Just create, share, and let the magic happen!
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:justify-center lg:justify-normal">
              <Button asChild size="lg">
                <Link href="#">Start Now - It's Free!</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#how-it-works">How it Works</Link>
              </Button>
            </div>
            <div className="flex gap-4 flex-wrap text-muted-foreground text-sm md:justify-center lg:justify-normal">
              <div className="flex items-center gap-2">
                <CircleCheck className="text-green-400 w-[1.3rem]" />
                <span>No registration required</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="text-green-400 w-[1.3rem]" />
                <span>100% private and secure</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="text-green-400 w-[1.3rem]" />
                <span>Works on any device</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Card className="w-105 px-6 h-91.5">
              <CardContent className="rounded-lg p-6 space-y-4 bg-secondary/60 text-sm">
                <h3 className="text-lg font-semibold">Create Your Exchange</h3>
                <div className=" gap-2 flex items-center">
                  <Users className="w-[1.2rem]" />
                  <span>Add participants</span>
                </div>
                <div className=" gap-2 flex items-center">
                  <CalendarDays className="w-[1.2rem]" />
                  <span>Set draw time</span>
                </div>
                <div className=" gap-2 flex items-center">
                  <CLink className="w-[1.2rem]" />
                  <span>Share the link</span>
                </div>
                <div className="p-3 text-center rounded-lg bg-secondary">
                  <span>{process.env.NEXT_BASE_URL}/abc123</span>
                </div>
                <div className="p-3 rounded-lg text-center bg-primary text-black">
                  Generate Secret Draw
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
