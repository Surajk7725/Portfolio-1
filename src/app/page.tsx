// components
import { Footer } from "@/components";

// sections
import Hero from "./hero";
import About from "./about-us";
import InformationSection from "./information-section";
import Resume from "./resume";
import Projects from "./projects"; 
import ContactForm from "./contact-form";


export default function Portfolio() {
  return (
    <>
      <Hero />
      <About />
      <InformationSection />
      <Resume />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}
