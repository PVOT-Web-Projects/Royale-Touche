"use client"
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Inner_header from "@/common/inner_header/page";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import innovation_image from "@/images/InnovationNewBanner.jpg";
import innovation_image_mobile from "@/images/inn_banner_new.png";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import styles from "@/app/innovation/innovation.module.css";
import "./innovationMobileBanner.css";

const Factory_walk = dynamic(() => import("@/components/factory_walk/page"));
const Factory_walk1 = dynamic(() => import("@/components/factory_walk/page2"));

const Page = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Initialize width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width) {
      document.title = "Innovation - Royale Touch Performance Ply";
    }
  }, [width]);

  const [isLoading, setIsLoading] = useState(true);

  function handleLoad(data) {
    setIsLoading(data);
  }

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div>
        <div className={styles.innovation_desk}>
          <Inner_header
            inner_header_image={innovation_image}
            heading_big="INNOVATION"
          />
        </div>
        <div className={`${styles.innovation_mobile} innovationBannerMobile`}>
          <Inner_header
            inner_header_image={innovation_image_mobile}
            heading_big="INNOVATION"
          />
        </div>
        {width && (
          <>
            {width > 991 ? (
              <Factory_walk loadFacoryWalk={handleLoad} />
            ) : (
              <Factory_walk1 loadFacoryWalkMobile={handleLoad} />
            )}
          </>
        )}
        <Form />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
