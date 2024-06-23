"use client"
import "./globals.css";
import { CarouselSection, BannerSection, ProductionSection, ProblemSection, PricingSection, FAQSection } from "@/components/homePageSections"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect } from "react";
var items = document.querySelectorAll(".fade div, .fade li, .fadeup, .fadeleft, .fadelay, .fade tr");
  // check if an element is in viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top + (rect.height/2) <= (window.innerHeight || document.documentElement.clientHeight)

    );
  }


    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

const Home = () => {
  useEffect(()=> {
    items = document.querySelectorAll(".fade div, .fade li, .fadeup, .fadeleft, .fadelay, .fade tr");
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  }, [])
  return (
    <>
      <Header />
      <BannerSection />
      <CarouselSection />
      <ProductionSection />
      {/* <ProblemSection /> */}
      {/* <PricingSection/> */}
      <FAQSection />
      <Footer />
    </>
  )
}

export default Home
