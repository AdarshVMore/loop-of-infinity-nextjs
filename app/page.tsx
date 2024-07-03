import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BoxLayout1 from "./components/BoxLayout1";
import InfoSlider from "./components/InfoSlider";
import BoxLayout2 from "./components/BoxLayout2";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BoxLayout1 />
      <InfoSlider />
      <BoxLayout2 />
      <Footer />
    </main>
  );
}
