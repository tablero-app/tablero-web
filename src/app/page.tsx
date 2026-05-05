import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Footer } from "@/components/site/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
