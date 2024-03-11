"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/page";
import { AnimatePresence } from "framer-motion";
import Inner_header from "@/common/inner_header/page";
import Preloader from "@/components/preloader/page";
import Claim_banner from "@/images/claim_banner.png";
import PolicyData from "@/components/policyData/page";
const Blogs = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Royale Touche Plywood";
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

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
      <Inner_header
        inner_header_image={Claim_banner}
        heading_big="PRIVACY POLICY"
      />
      <PolicyData />

      <Footer />
    </main>
  );
};

export default Blogs;
