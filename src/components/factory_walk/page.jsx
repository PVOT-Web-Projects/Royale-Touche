import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/components/factory_walk/factory_walk.module.css";
gsap.registerPlugin(ScrollTrigger);

const FactoryWalk = ({ loadFacoryWalk }) => {
  const router = useRouter();
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
  console.log("FactoryWalk loading", loading);

  const [refButton, inViewButton] = useInView({
    triggerOnce: false,
  });
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 5 }, // Move the button down initially
    visible: { opacity: 1, y: -85 }, // Move the button up to its original position
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
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    const setCanvasSize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth >= 1600) {
        canvas.width = 2000; // Width remains constant for desktop screens
        canvas.height = windowHeight * 1; // Adjust the height for desktop screens
      } else if (windowWidth >= 1599) {
        canvas.width = 1600; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      } else if (windowWidth >= 1440) {
        canvas.width = 1600; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      } else if (windowWidth >= 1200) {
        canvas.width = 1600; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      } else if (windowWidth >= 1024) {
        canvas.width = 1700; // Adjust the width for screen width 1024
        canvas.height = windowHeight * 1; // Adjust the height for screen width 1024
      } else if (windowWidth >= 820) {
        canvas.width = 1650; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } else {
        canvas.width = 400; // Adjust the width for screen width 320
        canvas.height = windowHeight * 0.6; // Adjust the height for screen width 320
      }
      ScrollTrigger.update();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 1199;
    const currentFrame = (index) =>
      `https://newroyaltouch.pvotdesigns.xyz/assets/images/compressed/walkdesktop/F${(
        index + 0
      )
        .toString()
        .padStart(4, "0")}.jpg`;

    // https://newroyaltouch.pvotdesigns.xyz/assets/images/compressed/walkdesktop/F0000.jpg
    // https://newroyaltouch.pvotdesigns.xyz/assets/images/Original/factorywalk/F0000.jpg
    // https://newroyaltouch.pvotdesigns.xyz/assets/images/compressed/walkdesktop/F0000.jpg
    // https://royaletouche.humbeestudio.xyz/wp-content/uploads/2024/02/000001-scaled.jpg
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
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loadingCounter]);
  console.log(loading ? "FactoryWalk Loading" : "FactoryWalk Complate");
  console.log(loadFacoryWalk(loading));

  return (
    <div className={styles.canvas_layer_setting_first_outer}>
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
        className={styles.buttonShowouter}
      >
        <button
          onClick={() => router.push("/contactUs")}
          className={styles.buttonShow}
          role="button"
        >
          <span className={styles.text1}>Buy Now</span>
          <span className={styles.text1}>Buy Now</span>
        </button>
      </motion.div>
    </div>
  );
};

export default FactoryWalk;
