import React from "react";
import { Card, CardContent } from "../ui/card";

import {
  ShieldUser,
  CalendarCheck,
  SlidersHorizontal,
  Share2,
  Lock,
  History,
} from "lucide-react";

const featuresContent = [
  {
    id: 1,
    title: "Privay First",
    description:
      "No emails, no accounts. Participants verify with optional PINs.Only you know your match until the reveal.",
    icon: <ShieldUser />,
  },
  {
    id: 2,
    title: "Scheduled Draws",
    description:
      "Set the exact date and time for the draw. The system automatically assigns matches and notifies participants.",
    icon: <CalendarCheck />,
  },
  {
    id: 3,
    title: "Flexible Rules",
    description:
      'Add constraints like "avoid pairs" or group restrictions. Set gift worth, and allow or disallow self-assignments.',
    icon: <SlidersHorizontal />,
  },
  {
    id: 4,
    title: "Easy Sharing",
    description:
      "One link to share with all participants. Works on any device—no app install needed.",
    icon: <Share2 />,
  },
  {
    id: 5,
    title: "Secure & Fair",
    description:
      "Draws are performed server-side to ensure fairness. Participants can only reveal their match once.",
    icon: <Lock />,
  },
  {
    id: 6,
    title: "Manage Anytime",
    description:
      "Add or remove participants before the draw. Edit event details until the scheduled time.",
    icon: <History />,
  },
];

const Features = () => {
  return (
    <section>
      <div className="container mx-auto max-w-7xl py-20 px-4">
        <h2 className="text-4xl font-semibold text-center mb-4 leading-12 md:leading-16 lg:text-5xl">
          Why Choose Secret-Circle?
        </h2>
        <p className="text-center text-lg text-muted-foreground">
          We've designed the simplest, most private way to organize gift
          exchanges for any group.
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-16">
          {featuresContent.map((content) => (
            <Card key={content.id}>
              <CardContent className="space-y-5">
                <div className="bg-accent/70 flex items-center justify-center w-12 h-12 rounded-full">
                  {content.icon}
                </div>
                <h3 className="text-xl font-semibold">{content.title}</h3>
                <p className="text-muted-foreground">{content.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
