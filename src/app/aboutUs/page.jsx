"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import HeroSection from "@/components/heroSection/page";
import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import Real_Timeline from "@/common/real_timeline/page";
import Slider from "@/components/slider/page";
import aboutUs_image from "@/images/new_about.jpg";
import WhyPlywood from "@/components/whyPlywood/WhyPlywood";
import OurStory from "@/components/ourStory/page";

const Page = () => {
  useEffect(() => {
    document.title = "Buy Plywood & Blockboard Online | Plywood Manufacturer in India - Royale Touche Plywood";
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  

  setTimeout(() => {
    setIsLoading(false);
    if (typeof document !== "undefined") {
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }
  }, 2000);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div>
        <Navbar />
      </div>
      <div style={{ background: "#d9d9d9" }}>
        <HeroSection
          banner_image={aboutUs_image}
          header_name="About Us"
          header_comment="Royale Touche is a leading manufacturer of luxury laminates, plywood and wooden flooring in India."
        />
        <OurStory />
        <WhyPlywood />
        <Real_Timeline />
        <Slider />
      </div>
      <Form />
      <Footer />
    </main>
  );
};
export default Page;
