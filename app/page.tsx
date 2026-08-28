import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventPackages from "@/components/EventPackages";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EventPackages /> 
      <Menu />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}