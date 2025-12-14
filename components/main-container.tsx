import { UploadProvider } from "@/contexts/upload-context";
import AboutSection from "./about-section";
import CallToUpload from "./call-to-upload";
import Explanation from "./explanation";
import Hero from "./hero";
import InfoTags from "./info-tags";

export default function MainContainer() {
  return (
    <>
      <UploadProvider>
        <Hero />
        <AboutSection />
        <Explanation />
        <InfoTags />
        <CallToUpload />
      </UploadProvider>
    </>
  )
}

