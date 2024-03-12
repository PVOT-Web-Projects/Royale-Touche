"use client";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import splitType from "split-type";
import Navbar from "@/components/navbar/index";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import logo from "@/images/finalNavbarLogo.png";
import "./inner_header_ani.css";
import styles from "@/common/inner_header/inner.module.css";
import { useEffect, useRef } from "react";
const Page = (props) => {
  const newRef = useRef("");
  let refs = useRef([]);
  useEffect(() => {
    setTimeout(() => {
      const ourText = new splitType(newRef.current, { types: "chars" });
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
          duration: 1.5,
          rotate: "0deg",
          ease: "power4.out",
        }
      );
    }, 2300);
  }, []);
  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="inner_header_animation">
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

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const router = useRouter();
  return (
    <div className={styles.s}>
      <div className={styles.inner_image_outer}>
        <Image
          fill
          alt="image"
          src={props.inner_header_image}
          className={styles.homepage_image}
        />
        <div className={styles.inner_header_text}>
          <div className={styles.inner_header_t1} ref={newRef}>
            {props.heading && splitWords(props.heading)}
          </div>
          <div className={styles.inner_header_t2}>{props.heading2}</div>
          <div className={`${styles.inner_header_big} bannerHeading`}>{props.heading_big}</div>
        </div>
      </div>
      <div className={styles.home_nav_setting}>
        <div className={styles.nav_menu_names}>
          <Image
            onClick={() => router.push("/")}
            src={logo}
            alt="image"
            className={styles.logo}
          />
        </div>

        <div className={styles.nav_ham_button}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Page;
