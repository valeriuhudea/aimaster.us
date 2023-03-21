import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Gallery from "../components/gallery"
import Forms from "../components/forms"
import Container from '../components/container'

import { DefaultSeo } from 'next-seo';

// import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
    
    <DefaultSeo
      title="AI Masters"
      description="AI Masters User Interfacing"
      openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://aimasters.us/',
          siteName: 'AI Masters',
      }}
      twitter={{
          handle: '@aimasters',
          site: '@aimasters',
          cardType: 'summary_large_image',
      }}
      
      />
      <link rel="icon" href="/favicon.ico" />
      
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="AI Masters Live"
        title="AI Solutions improving businesses every moment 360° infrastructure">
        Sectiune pentru a prezenta un promo sau video demo a productiei.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nulla
        ac sem consequat iaculis quis nec tellus.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Documentation"
        title="Documentation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nulla
        ac sem consequat iaculis quis nec tellus.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="documentation" title="Documentation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nulla
        ac sem consequat iaculis quis nec tellus.
      </SectionTitle>
      <Faq />
      <Forms />
      <Cta />

      <Footer />
    </>
  );
}
