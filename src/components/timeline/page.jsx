"use client";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@/components/timeline/time.module.css";

const Home = ({loadUSP}) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  // const [loading, setLoading] = useState(true);
  // console.log("USP loading", loading);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    // canvas.width = window.innerWidth;
    canvas.width = 750;
    canvas.height = 750;


    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let canvasHeight = canvas.height
  
    // if (windowWidth >= 1700) {
    //   canvasHeight = 800; // Set height for large screens (>=1600px width)
    // } 

    if (windowWidth >= 1685) {
      canvasHeight = 700; // Set height for large screens (>=1600px width)
    } 
    else if(windowWidth >= 1680){
      canvasHeight = 670; // Set height for large screens (>=1600px width)
    }

    else if (windowWidth >= 1600) {
      canvasHeight = 740; // Set height for medium screens (>=1200px width)
    }
    
    else if (windowWidth >= 1200) {
      canvasHeight = 700; // Set height for medium screens (>=1200px width)
    } else {
      canvasHeight = 700; // Set height for small screens (<1200px width)
    }
  
    canvas.height = canvasHeight; 

    // const setCanvasSize = () => {
    //   const windowWidth = window.innerWidth;
    //   const windowHeight = window.innerHeight;

    //   if (windowWidth >= 1600) {
    //     canvas.width = 1000; // Width remains constant for desktop screens
    //     canvas.height = windowHeight * 0.8; // Adjust the height for desktop screens
    //   }
    //   else if (windowWidth >= 1440) {
    //     canvas.width = 800; // Width remains constant for tablet screens
    //     canvas.height = windowHeight * 0.8; // Adjust the height for tablet screens
    //   }

    //   else if (windowWidth >= 1336) {
    //     canvas.width = 800; // Width remains constant for tablet screens
    //     canvas.height = windowHeight * 0.8; // Adjust the height for tablet screens
    //   }
      
    //   else if (windowWidth >= 1200) {
    //     canvas.width = 800; // Width remains constant for tablet screens
    //     canvas.height = windowHeight * 1; // Adjust the height for tablet screens
    //   }

    //   else if (windowWidth >= 1024) {
    //     canvas.width = 800; // Width remains constant for tablet screens
    //     canvas.height = windowHeight * 0.8; // Adjust the height for tablet screens
    //   }

     
      
      
    //   else {
    //     canvas.width = 530; // Width remains constant for mobile screens
    //     canvas.height = windowHeight * 0.7; // Adjust the height for mobile screens
    //   }

    //   // Update ScrollTrigger end position based on canvas dimensions
    //   ScrollTrigger.update();
    // };

    // setCanvasSize();
    // window.addEventListener("resize", setCanvasSize);

    const frameCount = 483;

    const currentFrame = (index) =>
      `https://newroyaltouch.pvotdesigns.xyz/assets/images/compressed/usp/F${(index + 1)
        .toString()
        .padStart(4, "0")}.jpg`;


        // https://newroyaltouch.pvotdesigns.xyz/assets/images/compressed/usp/F0000.jpg
        // https://newroyaltouch.pvotdesigns.xyz/assets/images/Original/usp/F0000.jpg
        // https://newroyaltouch.pvotdesigns.xyz/assets/images/compressed/usp/F0000.jpg

        // https://newroyaltouch.pvotdesigns.xyz/assets/images/compressed/usp/F000.jpg
        // https://royaletouche.humbeestudio.xyz/wp-content/uploads/2024/02/001-scaled.jpg
        // let imgL = [];
    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
      // imgL.push(img.src);
    }
    // const loadImages = async () => {
    //   try {
    //     const loadImagePromises = imgL.map((imageUrl) => {
    //       return new Promise((resolve) => {
    //         const img = new Image();
    //         img.src = imageUrl;
    //         img.onload = () => resolve();
    //       });
    //     });

    //     await Promise.all(loadImagePromises);
    //     // for (let i = 0; i < 100; i++) console.log(i);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error loading images:", error);
    //     // Handle error loading images
    //   }
    // };
    // loadImages();
    // console.log(imgL);
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

    // function render() {
    //   context.clearRect(0, 0, canvas.width, canvas.height);
    //   context.drawImage(
    //     imagesRef.current[airpodsRef.current.frame],
    //     0,
    //     0,
    //     canvas.width,
    //     canvas.height
    //   );
    // }


    function render() {
      const frame = imagesRef.current[airpodsRef.current.frame];
      const canvasWidth = canvasRef.current.width;
      const canvasHeight = canvasRef.current.height;
      
      const frameWidth = 450; // Original width of your frames
      const frameHeight = (frame.height * frameWidth) / frame.width; // Maintain aspect ratio
    
      const xOffset = (canvasWidth - frameWidth) / 2;
      const yOffset = (canvasHeight - frameHeight) / 2;
    
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(frame, xOffset, yOffset, frameWidth, frameHeight);
    }
    


    // Cleanup
    return () => {
      // window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []);
  
  // console.log(loading ? "USP Loading" : "USP Complate");
  // console.log(loadUSP(loading));

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
        start: "top 50%",
        end: "bottom 40%",
      },
      opacity: 1,
      color: "white",
      ease: "none",
      stagger: 0.9,
    });
  };

  return (
    <div className={styles.display1}>
      <div className={styles.first_timeline_outer}>
        <div className={styles.first_timeline_inner}>
          <div className={styles.timeline_animation_text}>
            Promise Of Quality
          </div>
          <div className={styles.timeline} ref={container}>
            <div className={styles.line}></div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>01</p>
                <h2 className={styles.twoo}>Vacuum Pressure Treatment</h2>
                <p className={styles.timeline_sec_comment}>
                  The only plywood in India made with 100% scientifically
                  researched proprietary Vacuum Pressure Chemical Treated veneer
                  to provide protection against termites, borers and fire
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>02</p>
                <h2 className={styles.twoo}>Fully Composed Core & Panels</h2>
                <p className={styles.timeline_sec_comment}>
                  100% composed veneer sheets made using sophisticated core and
                  panel composers to ensure precise manufacturing of high
                  quality plywood
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>03</p>
                <h2 className={styles.twoo}>100% Phenolic Resins</h2>
                <p className={styles.timeline_sec_comment}>
                  100% BWP grade high solid phenolic polymers ensures excellent
                  bonding and waterproof properties.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>04</p>
                <h2 className={styles.twoo}>Termite & Borer Proof</h2>
                <p className={styles.timeline_sec_comment}>
                  Shielded against microbes, viruses, bacteria, fungi, termites,
                  and borers in their favourable conditions.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>05</p>
                <h2 className={styles.twoo}>Fire Resistant</h2>
                <p className={styles.timeline_sec_comment}>
                  Fully vacuum pressure-treated veneer with fire-retardant
                  chemical containing nano particles, and organ phosphorus
                  chemicals used during the process, providing excellent
                  fire-retardant properties.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>06</p>
                <h2 className={styles.twoo}>Boiling Water Proof</h2>
                <p className={styles.timeline_sec_comment}>
                  100% BWP grade high solid phenolic polymers ensures excellent
                  bonding and waterproof properties.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>07</p>
                <h2 className={styles.twoo}>High Screw & Nail Holding Capacity</h2>
                <p className={styles.timeline_sec_comment}>
                  made from all composed full sheet veneers of select hardwood
                  species, ensuring a robust and well-structured plywood.
                </p>
              </div>
            </div>
          
          </div>
        </div>

        <div className={styles.canvas_side_outer}>
          <section className={styles.sectionX} ref={sectionRef}>
            <canvas  className={styles.canvas_layer} ref={canvasRef}></canvas>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
