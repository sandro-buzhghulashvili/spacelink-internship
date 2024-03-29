import AboutUs from './components/AboutUs/AboutUs';
import Feedback from './components/Feedback/Feedback';
import HeroComponent from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Pricing from './components/Pricing/Pricing';

export default function Home() {
  return (
    <>
      <HeroComponent />
      <HowItWorks />
      <AboutUs />
      <Feedback />
      <Pricing />
    </>
  );
}
