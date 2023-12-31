"use client"
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@/components/timeline/time.module.css";






const Home = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const setCanvasSize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth >= 1600) {
        
        canvas.width = 1000; // Width remains constant for desktop screens
        canvas.height = windowHeight * 0.8; // Adjust the height for desktop screens
      } else if (windowWidth >= 1200) {
        canvas.width = 800; // Width remains constant for tablet screens
        canvas.height = windowHeight * 1; // Adjust the height for tablet screens
      } else {
        canvas.width = 530; // Width remains constant for mobile screens
        canvas.height = windowHeight * 0.7; // Adjust the height for mobile screens
      }

      // Update ScrollTrigger end position based on canvas dimensions
      ScrollTrigger.update();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 483;

    const currentFrame = (index) =>
      `https://iraoverseas.com/wp-content/uploads/2024/01/${(index + 1)
        .toString()
        .padStart(3, "0")}-scaled.jpg`;

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
    }

    gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.5,
          end: "+=350%",
        },
      })
      .to(airpodsRef.current, {
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
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(".triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 70%",
        end: "bottom 90%",
      },
      opacity: 1,
      color: "white",
      ease: "none",
      stagger: 0.9,
    });
  };


  return (
    <div>
      <div className={styles.first_timeline_outer}>
        <div className={styles.first_timeline_inner}>
        <div className={styles.timeline_animation_text}>Promise Of Quality</div>
          <div
            className={styles.timeline}
            ref={container}>
            <div className={styles.line}></div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>01</p>
                <h2 className={styles.twoo}>
                 Vaccuum  Pressure Treatment
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>02</p>
                <h2 className={styles.twoo}>
                  Fully Composed Core & Panels
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>03</p>
                <h2 className={styles.twoo}>
                  100% Phenolic Resigns
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>04</p>
                <h2 className={styles.twoo}>
                Ternite & Bores Proof
                  
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>05</p>
                <h2 className={styles.twoo}>
                Fire Resistant
                  
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>06</p>
                <h2 className={styles.twoo}>
                Boiling Water Proof
               
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>07</p>
                <h2 className={styles.twoo}>
                High Nail Welding Capacity
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            {/* <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>08</p>
                <h2 className={styles.twoo}>
                  Customer Satisfaction
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div> */}
          </div>
        </div>




        <div className={styles.canvas_side_outer}>
        <section className={styles.sectionX} ref={sectionRef}>
      <canvas ref={canvasRef}></canvas>
    </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
