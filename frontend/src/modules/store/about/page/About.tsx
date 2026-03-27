import AboutLayout from "@/modules/store/about/layouts/AboutLayout";
import AboutHeaderSection from "@/modules/store/about/sections/AboutHeaderSection";
import MissionVisionSection from "@/modules/store/about/sections/MissionVisionSection";
import ContactSection from "@/modules/store/about/sections/ContactSection";

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
