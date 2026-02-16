import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import ServicesOverview from "@/components/ServiecesOverview";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <AboutSection></AboutSection>
    <ServicesOverview></ServicesOverview>
    <Testimonials></Testimonials>
    </>
  );
}
