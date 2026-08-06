import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import EventPackages from "@/components/EventPackages";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Menu />
      <EventPackages />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}