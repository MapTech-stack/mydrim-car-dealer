import Hero from "../components/Home/Hero/Hero";
import Featured from "../components/Home/Featured/Featured";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import OurMission from "../components/Home/Mission/OurMission";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import CallToAction from "../components/Home/CTA/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <WhyUs />
      <OurMission />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default Home;
