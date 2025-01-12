/* eslint-disable @typescript-eslint/no-unused-vars */

import "aos/dist/aos.css";
import Navbar from "@/components/navbar"
import ContactPage from "@/components/contact"
import Footer from "@/components/footer"
import Home from "@/components/home"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import { Poppins } from "next/font/google";


export default function Hero() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <ContactPage />
      <Footer />
    </div>
  )
}

