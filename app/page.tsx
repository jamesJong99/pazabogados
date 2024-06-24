"use client"
import "./globals.css";
import { CarouselSection, BannerSection, FAQSection, ProductionSection } from "@/components/homePageSections"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <BannerSection />
      <CarouselSection />
    </>
  )
}

export default Home
