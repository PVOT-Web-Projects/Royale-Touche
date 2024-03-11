"use client";
import React from "react";
import HeroSection from "@/components/heroSection/page";
import Timeline from "@/components/timeline/page";
import Timeline1 from "@/components/timeline/page2";
import Footer from "@/components/footer/page";
import Layers from "@/components/layers/page";
import Factory from "@/components/factory/page";
import Form from "@/components/form/page";
// import Plyspin from "@/components/plyspin/page";
import Navbar from "@/components/navbar/index";
import HomeStore from "@/components/homeStore/page";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useLayoutEffect } from "react";
import "./homeParallax.css";

const Page = ({ lData }) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // lenis integration for smooth scroll
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      // card parallax effect
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        gsap.to(card.querySelector(".card-cover"), {
          yPercent: 60,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section className="cards">
        <div className="card">
          <div className="card-cover">
            <HeroSection
              video_bg="./video/video2.mp4"
              homepage_heading="ply that is a living shield for beautiful and timeless furniture"
            />
          </div>
        </div>
        <Factory loadImage={lData} />
      </section>
      <Layers loadLayer={lData} />
      {/* <Plyspin /> */}
      <Timeline  />
      <Timeline1 />
      <HomeStore />
      <Form />
      <Footer />
    </div>
  );
};
export default Page;
