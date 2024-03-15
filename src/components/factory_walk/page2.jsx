import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/components/factory_walk/factory_walk.module.css";
gsap.registerPlugin(ScrollTrigger);

const FactoryWalkMobile = ({ loadFacoryWalkMobile }) => {
  const [info, setInfo] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false); // State to track animation end
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  const [loadingCounter, setLoadingCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  console.log("FactoryWalk mobile loading", loading);

  const [refButton, inViewButton] = useInView({
    triggerOnce: false,
  });
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 5 }, // Move the button down initially
    visible: { opacity: 1, y: -200 }, // Move the button up to its original position
  };

  useEffect(() => {
    if (inViewButton) {
      controls.start("visible");
    }
  }, [inViewButton, controls]);

  console.log(info);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    // Set a fixed size for the canvas (adjust as needed)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 587;
    const currentFrame = (index) =>
      `https://plywoodassets.royaletouche.com/assets/compressed/factorywalkmobile/F${(
        index + 0
      )
        .toString()
        .padStart(4, "0")}.jpg`;
        // https://plywoodassets.royaletouche.com/assets/compressed/factorywalkmobile/F0000.jpg
        // https://newroyaltouch.pvotdesigns.xyz/assets/images/compressed/factoryWalkMobile/F0000.jpg



    let imgL = [];
    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
      imgL.push(img.src);
    }

    const loadImages = async () => {
      try {
        const loadImagePromises = imgL.map((imageUrl, index) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
              setLoadingCounter(index + 1);
              resolve();
            };
          });
        });

        await Promise.all(loadImagePromises);

        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        // Handle error loading images
      }
    };
    loadImages();
    console.log(imgL);
    // const lCouner = Math.floor()
    console.log("Counter", loadingCounter);
    const animationTimeline = gsap.timeline({
      onUpdate: render,
      onComplete: () => setAnimationEnded(true), // Set animationEnded to true when animation completes
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 0.1,
        end: "+=5500%",
      },
    });

    animationTimeline.to(airpodsRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 1,
    });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Draw the image without scaling
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loadingCounter]);
  console.log(
    loading ? "FactoryWalk mobile Loading" : "FactoryWalk mobile Complate"
  );
  console.log(loadFacoryWalkMobile(loading));

  return (
    <div className={styles.canvas_layer_setting_outer}>
      <section ref={sectionRef} className={styles.factoryWalk_sec}>
        <canvas
          className={styles.canvas_layer_setting}
          ref={canvasRef}
        ></canvas>
      </section>

      <motion.div
        ref={refButton}
        initial="hidden"
        animate={inViewButton ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6, delay: 0.2 }}
        // className={styles.buttonShowouter}
      >
        {/* <button
          onClick={() => router.push("/contactUs")}
          className={styles.buttonShow}
          role="button"
        >
          <span className={styles.text1}>Buy Now</span>
          <span className={styles.text1}>Buy Now</span>
        </button> */}


        <Link className={styles.buttonShowouter}  href="https://royaletouche.com/product/promaxx-ply/" target="_blank">
                  <button className={styles.buttonShow} role="button"><span className={styles.text3}></span>BUY NOW<span className={styles.text3}>BUY NOW</span>
                  </button>
                  </Link>
      </motion.div>
    </div>
  );
};

export default FactoryWalkMobile;
