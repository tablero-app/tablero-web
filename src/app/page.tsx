import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Problema } from "@/components/site/problema";
import { Solucion } from "@/components/site/solucion";
import { Flujo } from "@/components/site/flujo";
import { Beneficios } from "@/components/site/beneficios";
import { Casos } from "@/components/site/casos";
import { Implantacion } from "@/components/site/implantacion";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problema />
        <Solucion />
        <Flujo />
        <Beneficios />
        <Casos />
        <Implantacion />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
