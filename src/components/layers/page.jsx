import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/common/button/button4";
import styles from "@/components/layers/layer.module.css";
gsap.registerPlugin(ScrollTrigger);

const Airpods = () => {

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

  const variants = {
    visible: { opacity: 1, y: 0, scale: 1 }, // Added scale property
    hidden: { opacity: 0, y: 50, scale: 5 }, // Adjust scale as needed
  };

  const outOfViewVariants = {
    visible: { opacity: 0, y: 50, scale: 5 },
    hidden: { opacity: 0, y: 50, scale: 5 },
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

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const setCanvasSize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth >= 1600) {
        canvas.width = 2000; // Width remains constant for desktop screens
        canvas.height = windowHeight * 1; // Adjust the height for desktop screens
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
      } else if (windowWidth >= 1024) {
        canvas.width = 2000; // Adjust the width for screen width 1024
        canvas.height = windowHeight * 1; // Adjust the height for screen width 1024

      }
      else if (windowWidth >= 820) {
        canvas.width = 2000; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      }
      
      else if (windowWidth >= 768) {
        canvas.width = 1500; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      }

      else if (windowWidth >= 430) {
        canvas.width = 1400; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } 
      
      else if (windowWidth >= 425) {
        canvas.width = 1200; // Adjust the width for screen width 425
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } 

      else if (windowWidth >= 375) {
        canvas.width = 1200; // Adjust the width for screen width 375
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } 


      else if (windowWidth >= 320) {
        canvas.width = 1200; // Adjust the width for screen width 375
        canvas.height = windowHeight * 1; // Adjust the height for screen width 425
      } 
      
      else {
        canvas.width = 400; // Adjust the width for screen width 320
        canvas.height = windowHeight * 0.6; // Adjust the height for screen width 320
      }

      // Update ScrollTrigger end position based on canvas dimensions
      ScrollTrigger.update();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 272;
    const currentFrame = (index) =>
      ` https://royaltouchassets.humbeestudio.xyz/assets/images/stacklayers/${(index + 8)
        .toString()
        .padStart(4, "0")}.png`;





        https://royaltouchassets.humbeestudio.xyz/assets/images/stacklayers/0001.png


        // https://royaltouchassets.humbeestudio.xyz/assets/images/stacklayers/0000.jpg
        


    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
    }

    // Fade in the counter and circle on mount
    gsap.from([`.${styles.percentageCounter}`, `.${styles.percentage_counter_outer}`], {
      opacity: 1,
      duration: 1,
      delay: 0.5, // Adjust the delay as needed
    });

    const timeline = gsap.timeline({
      onUpdate: () => {
        const progress = (timeline.progress() * 13).toFixed(0);
        setScrollPercentage(progress);
        setCounterCount(parseInt(progress)); // Update counter count
        render();
      },
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.5,
        end: "+=900%",
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
      context.arc(canvas.width / 2, canvas.height / 2, outerCircleRadius, 0, 2 * Math.PI);
      context.strokeStyle = "#218e88";
      context.lineWidth = 0.5;
      context.stroke();

      // Draw the inner circle
      context.beginPath();
      const innerCircleRadius = 100 + timeline.progress() * 140; // Adjust the multiplier as needed
      context.arc(canvas.width / 2, canvas.height / 2, innerCircleRadius, 0, 2 * Math.PI);
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



  useEffect(() => {
    if (counterCount === 12) {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0.5 },
      }).then(() => {
        controls.start({
          opacity: 1,
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
          // Scrolling down
          // setScrollPercentage(0); // Hide the counter when scrolling down
        } else {
          // Scrolling up
          // The counter will be updated by the GSAP timeline onUpdate
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
    if (counterCount >= 1 && counterCount <= 11) {
      setDisplayText("Crafted using advanced cross-bonding technology, adjacent layers of select hardwood species ");
    } else if (counterCount >= 12 && counterCount <= 13) {
      setDisplayText("100% imported Gurjan face veneer imparts strength, durability and elegance to the plywood");
    } else {
      setDisplayText(""); // Default to empty string
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
        <div className={styles.percentageCounter}>{scrollPercentage}</div>
      </div>
      <canvas className={styles.canvas_layer_settings} ref={canvasRef}></canvas>
    </section>


    <div className={styles.video_loop_outer}>
        <motion.video 
          autoPlay 
          loop 
          muted 
          className={styles.ply_spin_outer}
          animate={controlsVideo}
          variants={inViewText ? variants : outOfViewVariants}
          transition={{ duration: 1 }}
        >
          <source
            className={styles.ply_spin}
            src={"./video/plyFinalNew.mp4"}
            type="video/mp4"
          />
        </motion.video>

        <div className={styles.video_extra}>
          <motion.div
            className={styles.plyspin_text}
            ref={refText}
            initial="hidden"
            animate={inViewText ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 1 }}
          >
            The Royalè Experience
          </motion.div>
        </div>

        <div className={styles.plyspin_btn_outer}>
          <motion.div
            ref={refButton}
            initial="hidden"
            animate={inViewButton ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button btn_text="Learn More" />
          </motion.div>
        </div>
      </div>








  </div>

  );
};

export default Airpods;
