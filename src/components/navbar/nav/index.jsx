import React, { useState } from 'react';
import styles from "@/components/navbar/nav/nav2.module.css";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Innovation",
    href: "/innovation",
  },
  {
    title: "Products",
    href: "/product",
  },
  {
    title: "Find Store",
    href: "/find-store",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={`${styles.body1} ${isNavbarOpen ? styles.bodyFixed : ''}`}>
        <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
          {navItems.map((data, index) => (
            <Link key={index} data={{...data, index}} isActive={selectedIndicator === data.href} setSelectedIndicator={setSelectedIndicator} />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
