"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import Inner_header from "@/common/inner_header/page";
import Blockwood_flex from "@/components/blockwood_flex/page";
import Blockboard_main from "@/components/blockboard_main/page";
import innovation_image from "@/images/blockwood_header_img.webp";
import Specifications from "@/common/specifications/page2";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import Inner_page_slider2 from "@/common/inner_page_slider2/page";
import SmartChioceTable from "@/common/SmartChoice-Table/page2";
const SpecificationsLeftData = [
  {
    title: "GRADE:",
    text: " BWP Grade",
  },
  {
    title: "SPECIES USED:",
    text: "Gurjan, 100% Pine Timber and selected Hardwood species",
  },
  {
    title: "FACE VENEER: ",
    text: "Both Side Gurjan (Diptocarpus spp.)",
  },
  {
    title: "CORE VENEER:",
    text: "100% Pine Timber Double Line",
  },
  {
    title: "BOARD FRAME:",
    text: "Board frame made with 100% Kiln Seasoned Pine timber.",
  },
  {
    title: "SIZES OF Blockboard:",
    text: " 2400 X 1220mm, 2140 X1220mm",
  },
  {
    title: "LENGTHS:",
    text: "Up to + 2 to 4 mm of specified length",
  },
  {
    title: "WIDTHS:",
    text: "Up to + 1 to 3 mm of specified width",
  },
  {
    title: "THICKNESS TOLERANCE:",
    text: "Full Thickness (As per specified on the sheet)",
  },
  {
    title: "FACE VENEER THICKNESS:",
    text: "0.30 MM",
  },
  {
    title: "CALIBRATIONS:",
    text: "Both Sides Calibrated",
  },
  {
    title: "ADHESIVES:",
    text: "High Solid BWP Grade Phenolic Polymer Adhesive",
  },
  {
    title: "PRESERVATIVE TREATMENT:",
    text: "Four-stage preservative treatment.",
  },
];

const SpecificationsRightData = [
  {
    title: "EDGE STRAIGHTNESS:",
    text: "0.20%",
  },
  {
    title: "SQUARENESS:",
    text: "0.20%",
  },
  {
    title: "DENSITIES",
    text: "600 TO 650 Kg/m3",
  },
  {
    title: "WATER ABSORPTION (24 HRS)",
    text: "< 3 %",
  },
  {
    title: "WATER ABSORPTION (48 HRS)",
    text: "< 5%",
  },
  {
    title: "MOISTURE",
    text: "-- 7%-10%",
  },
  {
    title: "WATER RESISTANCE TESTS:",
    text: "No delamination after 72 hours of boiling test.",
  },
  {
    title: "ADHESIONS OF PLIES:",
    text: "EXCELLENT",
  },
  {
    title: "MODULUS OF ELASTICITY (N/mm2)",
    text: "= >6000",
  },
  {
    title: "MODULUS OF RUPTURE (N/mm2)",
    text: "= > 60 ",
  },
  {
    title: "SCREW HOLDING STRENGTH (KG)",
    text: "= > 190",
  },
  {
    title: "NAIL HOLDING STRENGTH (KG)",
    text: "= > 110",
  },
];

const Page = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  setTimeout(() => {
    setIsLoading(false);
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  }, 2000);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Inner_header
        inner_header_image={innovation_image}
        heading="With the dimensional stability of solid wood and appearance and sleekness of plywood, Royale Touche Blockboard gives you warp-free furniture that lasts a lifetime."
      />
      <Blockwood_flex />
      <Inner_page_slider2 />

      <Specifications
        leftData={SpecificationsLeftData}
        rightData={SpecificationsRightData}
      />
      <SmartChioceTable />
      <Blockboard_main />

      <Form />
      <Footer />
    </main>
  );
};

export default Page;
