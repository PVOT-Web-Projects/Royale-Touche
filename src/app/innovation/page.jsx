"use client";
import React from "react";
import { useEffect, useState } from "react";
import Inner_header from "@/common/inner_header/page";
import Factory_walk from "@/components/factory_walk/page";
import Factory_walk1 from "@/components/factory_walk/page2";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import innovation_image from "@/images/InnovationNewBanner.jpg";
import innovation_image_mobile from "@/images/inn_banner_new.png";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import styles from "@/app/innovation/innovation.module.css";
const Page = () => {
  useEffect(() => {
    document.title = "Innovation - Royale Touch Performance Ply";
  }, []);
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
        <div className={styles.innovation_mobile}>
          <Inner_header
            inner_header_image={innovation_image_mobile}
            heading_big="INNOVATION"
          />
        </div>
        <Factory_walk loadFacoryWalk={handleLoad} />
          {/* <Factory_walk1 loadFacoryWalkMobile={handleLoad} /> */}
      </div>
      <Form />
      <Footer />
    </main>
  );
};

export default Page;
