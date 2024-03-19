"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import Home from "@/components/home/page";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);



  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  // setTimeout(() => {
  //   setIsLoading(false);
  //   if (typeof document !== "undefined") {
  //     document.body.style.cursor = "default";
  //     window.scrollTo(0, 0);
  //   }
  // }, 3500);

  function handleLoad(data) {
    console.log(data);
    setIsLoading(data);
  }

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Home lData={handleLoad} />
    </main>
  );
}
