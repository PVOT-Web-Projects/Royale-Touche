"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/footer/page";
import { AnimatePresence } from "framer-motion";
import Inner_header from "@/common/inner_header/page";
import Preloader from "@/components/preloader/page";
import Blogs_banner from "@/images/Blog_Banner.jpg";
import Blogs_banner_mobile from "@/images/blogs_mobile.png";
import BlogPost from "@/common/blogPosts/page";
import styles from "@/app/Blogs/blogs.module.css"
const Blogs = () => {
  // document.title="Blogs - Royale Touch Performance Ply";
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Blogs on Plywood & Blockboard | Royale Touche Plywood";
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  setTimeout(() => {
    setIsLoading(false);
    if (typeof document !== "undefined") {
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }
  }, 2000);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
    <div className={styles.banner_img_desktop}>
      <Inner_header inner_header_image={Blogs_banner} heading_big="BLOGS" />
      </div>
      <div className={styles.blogs_banner_img}>
      <Inner_header inner_header_image={Blogs_banner_mobile} heading_big="BLOGS" />
      </div>
      <BlogPost />
      <Footer />
    </main>
  );
};

export default Blogs;
