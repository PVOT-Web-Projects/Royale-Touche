"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Inner_header from "@/common/inner_header/page";
import Preloader from "@/components/preloader/page";
import Claim_banner from "@/images/claim_banner.png";
import Footer from "@/components/footer/page";
import { useState } from "react";
import styles from "@/app/thanks/thanks.module.css";
import Image from "next/image";
import logo from "@/images/finalNavbarLogo.png";
import Navbar from "@/components/navbar/index";

const page = () => {
      const [isLoading, setIsLoading] = useState(true);
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
      {/* <Inner_header
        inner_header_image={Claim_banner}
        heading_big="CLAIM WARRANTY"
      /> */}
      <div className={styles.home_nav_setting}>
        {/* <div className={styles.nav_menu_names}>
          <Image
            onClick={() => router.push("/")}
            src={logo}
            alt="image"
            className={styles.logo}
          />
        </div> */}
        <div className={styles.nav_ham_button}>
          <Navbar />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src={logo} />
        </div>
        <div className={styles.thanksContent}>
          <h3 className={styles.thanksHeading}>
            We've received your request to Claim Warranty Certificate.
          </h3>
          <h6 className={styles.thanksSmallHeading}>
            Your application to claim warranty certificate has been submitted.
            Our representative withh get in touch with you soon.
          </h6>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default page