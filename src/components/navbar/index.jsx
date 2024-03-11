"use client";
import styles from "@/components/navbar/nav_style.module.css";
import { useEffect, useState } from "react";
import Nav from "@/components/navbar/nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  console.log("menu", isActive);

  useEffect(() => {
    // if (isActive) setIsActive(false);

    // if (isActive) {
    //   document.body.style.overflow = "hidden";
    // }
    // if (isActive === false) {
    //   document.body.style.overflow="unset"
    //   // document.body.style.overflowX = "hidden";
    // }
  }, [pathname, isActive]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
