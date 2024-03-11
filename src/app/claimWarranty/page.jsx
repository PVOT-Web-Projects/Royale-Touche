"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/page";
import { AnimatePresence } from "framer-motion";
import Inner_header from "@/common/inner_header/page";
import Preloader from "@/components/preloader/page";
import Claim_banner from "@/images/claim_banner.png";
import WarrantyForm from "@/components/warrantyForm/page";
// import WarrantyAccordian from "@/components/warrantyAccordian/page";
const Page = () => {
  useEffect(() => {
    document.title = "Claim Warranty | Royale Touche Plywood";
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
      <Inner_header
        inner_header_image={Claim_banner}
        heading_big="CLAIM WARRANTY"
      />
      <WarrantyForm />
      {/* <WarrantyAccordian /> */}
      <Footer />
    </main>
  );
};

export default Page;
