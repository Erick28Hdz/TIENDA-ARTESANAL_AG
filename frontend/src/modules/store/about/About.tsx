import AboutLayout from "@/features/layouts/about/AboutLayout";
import AboutHeaderSection from "@/features/section/about/AboutHeaderSection";
import MissionVisionSection from "@/features/section/about/MissionVisionSection";
import ContactSection from "@/features/section/about/ContactSection";

const About = () => {
  return (
    <AboutLayout>
      <AboutHeaderSection />
      <MissionVisionSection />
      <ContactSection />
    </AboutLayout>
  );
};

export default About;
