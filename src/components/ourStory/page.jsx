import image from "@/images/our-story.jpg";
import Image from "next/image";
import styles from "@/components/ourStory/ourStory.module.css";

const Page = () => {
  return (
    <div className={styles.ourStory}>
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <div className={styles.left}>
            <div className={styles.image}>
              <Image src={image} alt="storyImage" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.right_wrapper}>
            <div className={styles.heading}>
          <h3>Our Story</h3>
        </div>
              <div className={styles.content}>
                The year was
                <span>
                  {" "}
                  1978 when 5 brothers Ashwin Patel, Arvind Patel, Dinesh Patel,
                  Bharat Patel and Jitendra Patel
                </span>{" "}
                from Gujarat, decided to change the way India looked at
                Laminates. They wanted to change the country’s perception of
                laminates being just an economical, hard-wearing background
              </div>
              <div className={styles.content}>
                The dream was turned into reality when the
                <span>
                  {" "}
                  Royale Touches' first-ever manufacturing unit was set up in
                  Wadhwan city
                </span>{" "}
              </div>
              <div className={styles.content}>
                It was a start-up built on two simple rules:
                <ol>
                  <li>
                    Ever-changing designs and{" "}
                    <span>never-changing quality</span>
                  </li>
                  <li>
                    A royale customer is to <span>be treated like Royalty</span>
                  </li>
                </ol>
              </div>
              <div className={styles.content}>
                Over time, Royale Touché has grown to be{" "}
                <span>India’s most premium laminate brand</span> in the building
                material sector with a vast variety of designs and the promise
                of impeccable quality.
              </div>
              <div className={styles.content}>
                With the same values and principles, Royale Touché has decided
                to foray into the{" "}
                <span>plywood industry and revolutionize</span> the way people
                look at plywood.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
