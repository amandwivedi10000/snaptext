import AboutSection from "@/components/about-section";
import CallToUpload from "@/components/call-to-upload";
import Explanation from "@/components/explanation";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import InfoTags from "@/components/info-tags";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <AboutSection />
      <Explanation />
      <InfoTags />
      <CallToUpload />

      <Footer />
    </>
  )
}
