"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/page";
import { AnimatePresence } from "framer-motion";
import Inner_header from "@/common/inner_header/page";
import Preloader from "@/components/preloader/page";
import Blogs_banner from "@/images/blogs_banner.png";
import Navbar from "@/components/navbar/index";
import BlogPost from "@/common/blogPosts/page";
import BlogPostImage1 from "@/images/blogs_img1.png";
import BlogPostImage2 from "@/images/blogs_img2.png";
import BlogPostImage3 from "@/images/blogs_img3.png";
const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
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
    <main >
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Inner_header inner_header_image={Blogs_banner} heading_big="BLOGS" />
      <BlogPost
        image={BlogPostImage1}
        Date="January 11, 2024"
        blog_name="Interior Design"
        blogPost_heading="Top 10 Pooja Room Design Ideas"
        blogPost_text="In the rich tapestry of Indian culture, the pooja room holds a unique and revered place. It’s not merely a physical space within a home; it’s a sanctuary where families come together to connect with their spirituality, find solace, and offer their devotion. Designing a pooja room is not just a matter of aesthetics; it’s about crafting an environment that…"
      />

      <BlogPost
        image={BlogPostImage2}
        Date="March 20, 2024"
        blog_name="Interior Design"
        blogPost_heading="Top 10 Pooja Room Design Ideas"
        blogPost_text="In the rich tapestry of Indian culture, the pooja room holds a unique and revered place. It’s not merely a physical space within a home; it’s a sanctuary where families come together to connect with their spirituality, find solace, and offer their devotion. Designing a pooja room is not just a matter of aesthetics; it’s about crafting an environment that…"
      />

    <div style={{marginBottom:"3rem"}}>
    <BlogPost
        image={BlogPostImage3}
        Date="January 18, 2024"
        blog_name="Interior Design"
        blogPost_heading="Top 10 Pooja Room Design Ideas"
        blogPost_text="In the rich tapestry of Indian culture, the pooja room holds a unique and revered place. It’s not merely a physical space within a home; it’s a sanctuary where families come together to connect with their spirituality, find solace, and offer their devotion. Designing a pooja room is not just a matter of aesthetics; it’s about crafting an environment that…"
      />
       <div style={{background:"white" ,height:"100px"}}></div>
    </div>

      <Footer />
    </main>
  );
};

export default Blogs;
