import React from "react";
import { Card, CardContent } from "../ui/card";

const stepContent = [
  {
    id: 1,
    title: "Create Event",
    description:
      "Set your event title, gift worth, add participants, and schedule the draw time. Add optional PINs for extra security.",
  },
  {
    id: 2,
    title: "Share Link",
    description:
      "Copy the unique link and share it with your participants via your favorite messaging app or email.",
  },
  {
    id: 3,
    title: "Draw",
    description:
      "Participants open the link, select their name, and draw their Monito/Monita once the event starts.",
  },
  {
    id: 4,
    title: "Reveal & Enjoy",
    description:
      "Discover who you'll be gifting to and enjoy the fun of the exchange!",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="container mx-auto max-w-7xl py-20 px-4">
        <h2 className="text-4xl font-semibold text-center mb-4 leading-12 md:leading-16 lg:text-5xl">
          How It Works
        </h2>
        <p className="text-center text-lg text-muted-foreground">
          Organizing a gift exchange has never been easier. Just follow these
          simple steps.
        </p>
        <div className="grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-16 items-center justify-center">
          {stepContent.map((content) => (
            <Card key={content.id} className="max-w-[320px] h-69.5">
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center bg-accent/70 rounded-full h-12 w-12 font-semibold">
                    <span>{content.id}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center">{content.title}</h3>
                <p className="text-muted-foreground text-center">{content.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
