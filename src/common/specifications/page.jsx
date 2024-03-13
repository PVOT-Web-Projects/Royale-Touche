"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import spec_img from "@/images/specs_grp.png";
import styles from "@/common/specifications/specifications.module.css";
import Common_animation from "@/common/common_animation/animation";

const Page = ({ leftData, rightData }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [refLeft, inViewLeft] = useInView({ triggerOnce: true });
  const [refRight, inViewRight] = useInView({ triggerOnce: true });
  const [readmore, setReadmore] = useState(false);
  // Animation variant for entering from the bottom
  const animationVariant = {
    hidden: { opacity: 0, y: 80, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const leftVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };
  const rightVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };
  React.useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start("visible");
    }
    if (inViewRight) {
      controlsRight.start("visible");
    }
    if (inView) {
      controls.start("visible");
    }
  }, [controls,controlsLeft, controlsRight, inViewLeft, inViewRight, inView]);

  const handleReadmore = () => {
    setReadmore(!readmore);
  };

  return (
    <div>
      <div className={styles.specifications_section}>
        <div className={styles.specifications_title}>
          <Common_animation text="SPECIFICATIONS" />
        </div>
        <div className={styles.specifications_content}>
          <div className={styles.specifications_content_left} ref={refLeft}>
            <motion.div
              variants={staggerVariants}
              initial="hidden"
              animate={controlsLeft}
              className={styles.contentWidth}
            >
              {leftData?.map((item, index) => (
                <motion.div
                  key={index}
                  className="item"
                  variants={leftVariants}
                  style={{ marginBottom: "20px" }}
                >
                  <motion.span variants={leftVariants}>
                    {item.title}
                  </motion.span>
                  <motion.p variants={leftVariants}>{item.text}</motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className={styles.specifications_content_right} ref={refRight}>
            <motion.div
              variants={staggerVariants}
              initial="hidden"
              animate={controlsRight}
              className={styles.contentWidth}
            >
              {rightData?.map((item, index) => (
                <motion.div
                  key={index}
                  className="item"
                  variants={rightVariants}
                  style={{ marginBottom: "20px" }}
                >
                  <motion.span variants={rightVariants}>
                    {item.title}
                  </motion.span>
                  <motion.p variants={rightVariants}>{item.text}</motion.p>
                  {item.text1 && (
                    <motion.p variants={rightVariants}>{item.text1}</motion.p>
                  )}
                  {item.text2 && (
                    <motion.p variants={rightVariants}>{item.text2}</motion.p>
                  )}
                  {item.text3 && (
                    <motion.p variants={rightVariants}>{item.text3}</motion.p>
                  )}

                  {readmore && (
                    <>
                      {item.text4 && <motion.p>{item.text4}</motion.p>}
                      {item.text5 && <motion.p>{item.text5}</motion.p>}
                      {item.text6 && <motion.p>{item.text6}</motion.p>}
                      {item.text7 && <motion.p>{item.text7}</motion.p>}
                      {item.text8 && <motion.p>{item.text8}</motion.p>}
                      {item.text9 && <motion.p>{item.text9}</motion.p>}
                      {item.text10 && <motion.p>{item.text10}</motion.p>}
                      {item.text11 && <motion.p>{item.text11}</motion.p>}
                    </>
                  )}
                  {item.text4 ||
                  item.text5 ||
                  item.text6 ||
                  item.text7 ||
                  item.text8 ||
                  item.text9 ||
                  item.text10 ||
                  item.text11 ? (
                    <motion.p
                      variants={rightVariants}
                      onClick={handleReadmore}
                      className={styles.readmore}
                    >
                      {readmore ? "Read Less -" : "Read More +"}
                    </motion.p>
                  ) : null}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={animationVariant}
          className={styles.specifications_img}
        >
          <Image src={spec_img} alt="image" className={styles.s} />
        </motion.div>

      
      </div>
    </div>
  );
};
export default Page;
