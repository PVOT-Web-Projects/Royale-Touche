"use client";
import React from "react";
import { useEffect, useState } from "react";
import contactUs_image from "@/images/contactUs_banner_image1.png";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import Navbar from "@/components/navbar/index";
import Contact_Map from "@/common/contact_map/page";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import HeroSection from "@/components/Hero_ContactUs/page";
import ContactAddress from "@/components/contactAddress/Page";
const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | Royale Touche Plywood";
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
  }, 3000);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div>
        <div>
          <Navbar />
        </div>
        <HeroSection
          banner_image={contactUs_image}
          header_name="Contact Us"
          header_comment="Connect with Confidence: Reach Out to Royale Touché Plywood's Assistance with Any Queries You Have."
        />
        <Contact_Map />
        <ContactAddress />
      </div>
      <Form />
      <Footer />
    </main>
  );
};

export default ContactUs;
