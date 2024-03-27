import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/common/button/button4";
import styles from "@/components/plyspin/plyspin.module.css";

const Page = () => {
  const [refText, inViewText] = useInView({
    triggerOnce: false,
  });

  const [refButton, inViewButton] = useInView({
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  // dot dot
  return (
    <div>
      <div className={styles.video_loop_outer}>
        <video autoPlay loop muted className={styles.ply_spin_outer}>
          <source
            className={styles.ply_spin}
            src={"./video/plyFinalNew.mp4"}
            type="video/mp4"
          />
        </video>

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

export default Page;
