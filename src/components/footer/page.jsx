"use client";
import { useEffect , useState } from "react";
import Image from "next/image";
import footer_logo from "@/images/finalFooterLogo.png";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeadingTextAnimation from "@/common/AnimatedText/HeadingTextAnimation";
import Button from "@/common/button/button4";
import ScrollToTop from "react-scroll-to-top";
import Title from "@/components/footer/test";
import { useRouter } from "next/navigation";
import styles from "@/components/footer/footer.module.css";
import "./scroll_to_top.css";
import { usePathname } from "next/navigation";
import {
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Page = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);


  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const location = usePathname();
  const controls = useAnimation();
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
  
    window.addEventListener('scroll', toggleVisibility);
  
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const router = useRouter();

  return (
    <div>
    {showScrollButton && (
      <div className={styles.scrollToBottom} onClick={() => scroll.scrollToBottom()}>
        <svg width="100%" height="100%" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
          <path d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z" fill="#C3A464"/>
        </svg>
      </div>
    )}
      <div className={styles.footer_upper_heading_wrapper}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
        >
          <HeadingTextAnimation
            heading={"Explore the Royale"}
            justifyContent={"left"}
            className={styles.footer_upper_heading}
          />
          <HeadingTextAnimation
            heading={"Experience"}
            justifyContent={"left"}
            className={styles.footer_upper_heading}
          />
        </motion.div>
        {location != "/contactUs" && (
          <div className={styles.justforfooterbutton}>
            <Button btn_text="Contact Us" />
          </div>
        )}
      </div>
      <Title />
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_firstSide}>
          <Image
            onClick={() => router.push("/")}
            src={footer_logo}
            alt="Footer-logo"
            className={styles.footer_logo_image}
          />
        </div>
        <div className={styles.footer_secondSide}>
          <div className={styles.footer_titles}>{"INFORMATION"}</div>
          <ul className={styles.footer_headers}>
            <li className={styles.footer_item_list}>
              <Link href="/about-us">{"About us"}</Link>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/find-store">{"Find Nearest Store"}</Link>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/blogs">{"Blogs"}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer_third_Side}>
          <div className={styles.footer_titles}>{"HELP"}</div>
          <ul className={styles.footer_headers}>
            <li className={styles.footer_item_list}>
              <Link href="/privacy-policy">{"Privacy policy"}</Link>
            </li>

            <li className={styles.footer_item_list}>
              <Link href="/claim-warranty">{"Claim warranty"}</Link>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/contact-us">{"Contact us"}</Link>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/faqs">{"FAQ's"}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer_forthSide}>
          <div className={styles.footer_titles}>{"PRODUCT GUIDE"}</div>
          <ul className={styles.footer_headers}>
            <li className={styles.footer_item_list}>
              <a target="_blank" href="https://royaletouche.com/">
                {"Laminates"}
              </a>
            </li>
            <li className={styles.footer_item_list}>
              <a target="_blank" href="https://royaletouche.com/woodenfloors/">
                {" "}
                {"Wooden Floors"}{" "}
              </a>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/product/plywood">{"Plywood"}</Link>
            </li>
            <li className={styles.footer_item_list}>
              <Link href="/product/blockboard">{"Blockboard"}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
       
        <ScrollToTop
          smooth
          viewBox="0 0 24 22"
          svgPath="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z"
          color="#C3A464"
        />
      </div>
      <div className={styles.footer_copyright}>
        Copyright © 2024 All Rights Reserved by Royale Touche Performance Ply |
        <span className={styles.copyright_company_name}>
          <Link href="https://pvotdesigns.com/" target="_blank">
            {" PVOT"}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Page;
