import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import SalaryIncreaseSection from "@/components/SalaryIncreaseSection";
import WelcomeSection from "@/components/WelcomeSection";
import ValueProp from "@/components/ValueProp";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyPartnerWithUs from "@/components/WhyPartnerWithUs";
import UkSpecialists from "@/components/UkSpecialists";
import HowItWorks from "@/components/HowItWorks";
import ContactCta from "@/components/ContactCta";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#F8F9FA]">
      <ScrollProgress />
      <Navbar />
      <Hero />
      
      <SalaryIncreaseSection />
      <WelcomeSection />
      <ValueProp />
      <WhyChooseUs />
      <WhyPartnerWithUs />
      <UkSpecialists />
      <HowItWorks />
      <ContactCta />
      <ContactForm />
      <Footer />
    </main>
  );
}
