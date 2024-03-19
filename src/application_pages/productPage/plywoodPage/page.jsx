"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import innovation_image from "@/images/plywood_hero_img.jpg";
import Plywood_main from "@/components/plywood_main/page";
import Plywood_lights from "@/components/plywood_lights/page";
import Inner_header from "@/common/inner_header/page";
import Specifications from "@/common/specifications/page";
import Inner_page_slider3 from "@/common/inner_page_slider3/page";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page";
import SmartChioceTable from "@/common/SmartChoice-Table/page";

const SpecificationsLeftData = [
  {
    title: "GRADE:",
    text: "BWP Grade, Marine Grade (IS:710)",
  },
  {
    title: "SPECIES USED:",
    text: "Diptocarpus spp. (Gurjan) & Selected Hardwood Timber (Eucalyptus spp.)	",
  },
  {
    title: "FACE VENEER: ",
    text: "Both Side Gurjan (Diptocarpus spp.)",
  },
  {
    title: "SIZES OF PLYWOOD:",
    text: "2400 X 1220mm & 2140 X 1220mm ",
  },
  {
    title: "LENGTHS:",
    text: "up to + 2 to 4 mm of specified length",
  },
  {
    title: "WIDTHS",
    text: "Up to + 1 to 2 mm of specified width",
  },
  {
    title: "THICKNESS TOLERANCE",
    text: "Full Thickness	(Exact thickness as specified on the sheet)",
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
    title: "RESINS USED:",
    text: "High Solid BWP grade Phenolic Polymer",
  },
  {
    title: "EMISSION LEVEL:",
    text: "E0-Level Compliant",
  },
  {
    title: "PRESERVATIVE TREATMENT:",
    text: "Four-stage preservative treatment (Veneer, Resin, Adhesive & 	Surface Treatment)",
  },
  {
    title: "EDGE STRAIGHTNESS:",
    text: "0.20%",
  },
  {
    title: "SQUARENESS:",
    text: "0.20%",
  },
  {
    title: "DENSITIES:",
    text: "700 TO 720 Kg/ cm3",
  },
];

const SpecificationsRightData = [
  {
    title: "CORE GAP, OVERLAP:",
    text: "100% used fully composed sheet to avoid gaps and overlap.",
  },
  {
    title: "WATER ABSORPTION (24 HRS)",
    text: "< 1 -2 %	",
  },
  {
    title: "WATER ABSORPTION (48 HRS)",
    text: "< 2 - 3 %",
  },
  {
    title: "SCREW HOLDING CAPACITY",
    text: "> 265 Kg",
  },
  {
    title: "GLUE ADHESION STRENGTH",
    text: " Dry State (Average) > 1590 N",
    text2: "Dry State (Individual) > 1310 N",
    text3: "Adhesion Of Plies (Knife Test)- EXCELLENT",
  },
  {
    title: "BOILING WATER RESISTANCE TEST (AFTER 72 HRS BOILING)",
    text: "Wet State Average > 1190 N",
    text1: "Wetdual > 1020 N",
    text2: "Adhesion Of Plies State Indivi (Knife Test) - EXCELLENT",
  },
  {
    title: "MYCOLOGICAL TESTS",
    text: "Glue Shear Strength > 1170 N",
    text1: "Adhesion Of Plies -- EXCELLENT",
  },
  {
    title: "RETENTION 0F PRESERVATIVE CHEMICALS",
    text: "12.5 KG/M3 (VPT Treatment)",
  },
  {
    title: "STATIC BENDING STRENGTH",
    text: "Modulus Of Rupture (DRY STATE)",
    text1: "Along The Grain 	> 58 N/ MM2",
    text2: "Across The Grain 	> 49 N/MM2",
    text3: "Modulus Of Elasticity (DRY STATE)",
    text4: "Along The Grain 	> 7990 N/ MM2",
    text5: "Across The Grain 	> 6400 N/ MM2",
    text6: "Modulus OF RUPTURE (WET STATE)",
    text7: "Along The Grain 	> 35 N/ MM2",
    text8: "Across The Grain 	> 29 N/MM2",
    text9: "Modulus Of Elasticity (WET STATE)",
    text10: "Along The Grain 	> 4090 N/ MM2",
    text11: "Across The Grain 	> 3360 N/ MM2",
  },
  {
    title: "TENSILE STRENGTH",
    text: "Along The Grain > 58 N/ MM2",
    text: "Across The Grain > 39 N/ MM2",
    text: "Sum Of Tensile > 97 N/MM2",
  },
];

const Page = () => {
  
  const [isLoading, setIsLoading] = useState(true);

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
        heading="Plywood that is engineered to outsmart termites and borers, fights fire and is safe for your loved ones with E-0 emissions - An all in one Ply in its true sense"
      />
      <Plywood_lights />
      <Inner_page_slider3 />
      <Specifications
        leftData={SpecificationsLeftData}
        rightData={SpecificationsRightData}
      />
      <SmartChioceTable />
      <Plywood_main />
      <Form />
      <Footer />
    </main>
  );
};

export default Page;
