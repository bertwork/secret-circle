import Link from "next/link";
import { Button } from "../ui/button";

const FinalCta = () => {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4 py-20 max-w-7xl flex flex-col items-center">
        <h2 className="text-4xl text-center font-semibold mb-4 leading-12 md:leading-16 lg:text-5xl">
          Ready to Organize Your Gift Exchange?
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl">
          Join thousands of happy users who have made their holiday seasons,
          office parties, and special occasions more fun with Monito/Monita.
        </p>
        <div className="flex items-center justify-center flex-col gap-4 mt-16">
          <Button asChild size="lg">
            <Link href="#">Create Your Free Exchange Now</Link>
          </Button>
          <p className="text-sm text-muted-foreground/60 text-center">
            No credit card required. No hidden fees. Forever free for basic use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
