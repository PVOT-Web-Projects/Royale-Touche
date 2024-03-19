"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import big_arrow from "@/images/bigarrow.svg";
import Link from "next/link";
import Navbar from "@/components/navbar/index";
import styles from "@/application_pages/productPage/product2.module.css";
import gsap from "gsap";
import splitType from "split-type";
import "./productTextAnimation.css";

const Page = () => {
  const plywoodRef = useRef(null);
  const blockboardRef = useRef(null);
  const arrowRef = useRef(null);
  const heading_ref = useRef("");
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.set([plywoodRef.current, blockboardRef.current, arrowRef.current], {
      opacity: 0,
      scale: 1,
    });
    tl.to(plywoodRef.current, { opacity: 1, scale: 1, duration: 1, delay: 0.5 })
      .to(blockboardRef.current, { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
      .to(arrowRef.current, { opacity: 1, scale: 1, duration: 0.5 }, "-=0.5");
  }, []);
  const handleImageHover = (ref) => {
    gsap.to(ref, { scale: 1.1, duration: 0.3 });
  };
  const handleImageLeave = (ref) => {
    gsap.to(ref, { scale: 1, duration: 0.3 });
  };
  let refs = useRef([]);
  useEffect(() => {
    // setTimeout(() => {
    const ourText = new splitType(".two_heading_animation", { types: "chars" });
    const chars = ourText.chars;
    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
        rotate: "45deg",
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 2,
        rotate: "0deg",
        ease: "power4.out",
      }
    );
    // }, 2300);
  }, []);
  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="product_text_animation_wrapper">
          {letters}
        </p>
      );
    });
    return body;
  };
  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  return (
    <>
      <div className={styles.ply_bock}>
        <Navbar />
        <div className={styles.ply_side1}>
          <Link href="product/plywood">
            <div className={styles.plywood} ref={plywoodRef}>
              <h2 className={`${styles.plywood_title} two_heading_animation`}>
                {splitWords("Plywood")}
              </h2>
            </div>
            <div className={styles.big_arrow_outer}>
              <div
                ref={(el) => {
                  plywoodRef.current = el;
                  arrowRef.current = el; // assign arrowRef to the same element
                }}
                onMouseEnter={() => handleImageHover(arrowRef.current)}
                onMouseLeave={() => handleImageLeave(arrowRef.current)}
              >
                <Image
                  src={big_arrow}
                  alt="arrow"
                  className={styles.big_arrow}
                />
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.block_side2}>
          <Link href="/product/blockboard">
            <div className={styles.blockboard} ref={blockboardRef}>
              <h2
                className={`${styles.blockboard_title} two_heading_animation`}
              >
                {splitWords("Blockboard")}
              </h2>
            </div>
            <div className={styles.big_arrow_outer}>
              <div
                ref={(el) => (blockboardRef.current = el)}
                onMouseEnter={() => handleImageHover(blockboardRef.current)}
                onMouseLeave={() => handleImageLeave(blockboardRef.current)}
              >
                <Image
                  src={big_arrow}
                  alt="arrow"
                  className={styles.big_arrow}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Page;
