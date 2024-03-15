"use client"
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/common/button/button4";
import styles from "@/components/layers/layer.module.css";
import dynamic from "next/dynamic";
gsap.registerPlugin(ScrollTrigger);

const Airpods = ({loadLayer}) => {
  const controlsVideo = useAnimation();
  const [refText, inViewText] = useInView({
    triggerOnce: true,
  });

  const [refButton, inViewButton] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inViewText) {
      controlsVideo.start("visible");
    } else {
      controlsVideo.start("hidden");
    }
  }, [controlsVideo, inViewText]);

  const textVariants = {
    visible: { opacity: 1, y: 0, scale: 1 }, // Adjust y value for text
    hidden: { opacity: 0, y: 30, scale: 4 }, // Adjust y value for text
  };

  const buttonVariants = {
    visible: { opacity: 1, y: 30, scale: 1 }, // Adjust y value for button
    hidden: { opacity: 0, y: 50, scale: 4 }, // Adjust y value for button
  };

  const controls = useAnimation();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [circleSize, setCircleSize] = useState(100); // Initial circle size
  const [counterCount, setCounterCount] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  const [loading, setLoading] = useState(true);
  console.log("Layers's loading", loading);
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const setCanvasSize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth >= 1700) {
        canvas.width = 2000; // Width remains constant for desktop screens
        canvas.height = windowHeight * 1; // Adjust the height for desktop screens
      } 
      else if (windowWidth >= 1600) {
        canvas.width = 1600; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      }
      
      else if (windowWidth >= 1599) {
        canvas.width = 1600; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      }

      // else if (windowWidth >= 1440) {
      //   canvas.width = 1500; // Width remains constant for tablet screens
      //   canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      // }
      else if (windowWidth >= 1200) {
        canvas.width = 1600; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      } else if (windowWidth >= 1180) {
        canvas.width = 1700; // Adjust the width for screen width 1024
        canvas.height = windowHeight * 1; // Adjust the height for screen width 1024
      } 
      else if (windowWidth >= 1024) {
        canvas.width = 2000; // Adjust the width for screen width 1024
        canvas.height = windowHeight * 1; // Adjust the height for screen width 1024
      } else if (windowWidth >= 820) {
        canvas.width = 2000; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } else if (windowWidth >= 768) {
        canvas.width = 1500; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } else if (windowWidth >= 430) {
        canvas.width = 1500; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } else if (windowWidth >= 425) {
        canvas.width = 1500; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } else if (windowWidth >= 375) {
        canvas.width = 1500; // Adjust the width for screen width 375
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } else if (windowWidth >= 320) {
        canvas.width = 1500; // Adjust the width for screen width 375
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } else {
        canvas.width = 400; // Adjust the width for screen width 320
        canvas.height = windowHeight * 0.6; // Adjust the height for screen width 320
      }

      // Update ScrollTrigger end position based on canvas dimensions
      ScrollTrigger.update();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 350;
    const currentFrame = (index) =>
      `https://plywoodassets.royaletouche.com/assets/compressed/layers/${(
        index + 1
      )
        .toString()
        .padStart(5, "0")}.jpg`;
        // https://plywoodassets.royaletouche.com/assets/compressed/layers/00001.jpg
        // https://newroyaltouch.pvotdesigns.xyz/assets/images/Original/plystack/00001.jpg
        // https://newroyaltouch.pvotdesigns.xyz/assets/images/compressed/plystack/000.png

    let imgL = [];
    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
      imgL.push(img.src);
    }
    const loadImages = async () => {
      try {
        const loadImagePromises = imgL.map((imageUrl) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => resolve();
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
    // Fade in the counter and circle on mount
    gsap.from(
      [`.${styles.percentageCounter}`, `.${styles.percentage_counter_outer}`],
      {
        opacity: 1,
        duration: 1,
        delay: 0.5, // Adjust the delay as needed
      }
    );

    const timeline = gsap.timeline({
      onUpdate: () => {
        const progress = (timeline.progress() * 20).toFixed(0);
        setScrollPercentage(progress);
        setCounterCount(parseInt(progress)); // Update counter count
        render();
      },
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.5,
        end: "+=1300%",
      },
    });

    timeline.to(airpodsRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 1,
    });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );

      // Draw the outer circle
      context.beginPath();
      const outerCircleRadius = 120 + timeline.progress() * 190; // Adjust the multiplier as needed
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        outerCircleRadius,
        0,
        2 * Math.PI
      );
      context.strokeStyle = "#218e88";
      context.lineWidth = 0.5;
      context.stroke();

      // Draw the inner circle
      context.beginPath();
      const innerCircleRadius = 100 + timeline.progress() * 140; // Adjust the multiplier as needed
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        innerCircleRadius,
        0,
        2 * Math.PI
      );
      context.fillStyle = "rgba(33, 142, 136, 0.3)";
      context.fill();
      context.lineWidth = 1;
      context.stroke();
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  console.log(loading ? "Layers Loading" : "Layers Complate");
  console.log(loadLayer(loading));

  useEffect(() => {
    if (counterCount === 13) {
      controls
        .start({
          opacity: 0,
          y: 50,
          transition: { duration: 0.5 },
        })
        .then(() => {
          controls.start({
            opacity: 0,
            y: 0,
            transition: { duration: 0.5 },
          });
        });
    }
  }, [counterCount, controls]);

  useEffect(() => {
    const handleScrollDirection = () => {
      let lastScrollTop = 0;
      window.addEventListener("scroll", () => {
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
        } else {
        }
        lastScrollTop = currentScrollTop;
      });
    };

    handleScrollDirection();

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, []);

  useEffect(() => {
    // Set display text based on counter count
    if (counterCount >= 1 && counterCount <= 10) {
      setDisplayText(
        "Crafted using advanced cross-bonding technology, adjacent layers of select hardwood species "
      );
    } else if (counterCount >= 11 && counterCount <= 13) {
      setDisplayText(
        "100% imported Gurjan face veneer imparts strength, durability and elegance to the plywood"
      );
    } else {
      setDisplayText(""); // Set to empty string for other counter values
    }
  }, [counterCount]);

  return (
    <div className={styles.counter_relm}>
      <section ref={sectionRef}>
        <div className={styles.percentage_counter_outer}>
          {displayText && (
            <div
              // animate={controls}
              className={styles.dynamicText}
            >
              {displayText}
            </div>
          )}
          {counterCount < 14 && (
            <div className={styles.percentageCounter}>{scrollPercentage}</div>
          )}
          {counterCount > 14 && (
            <div className={styles.video_loop_outer}>
              <div className={styles.video_extra}>
                <motion.div
                  className={styles.plyspin_text}
                  // ref={refText}
                  initial="hidden"
                  animate={counterCount > 14 ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  The Royalè Experience
                </motion.div>
              </div>

              <div className={styles.plyspin_btn_outer}>
                <motion.div
                  // ref={refButton}
                  initial="hidden"
                  animate={counterCount > 14 ? "visible" : "hidden"}
                  variants={buttonVariants}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button btn_text="Learn More" />
                </motion.div>
              </div>
            </div>
          )}
        </div>
        <canvas
          className={styles.canvas_layer_settings}
          ref={canvasRef}
        ></canvas>
      </section>
    </div>
  );
};

export default Airpods;
