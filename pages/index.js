import Head from "next/head";
import Header from "../components/Header";
import Features from "../components/Features";
import Explore from "../components/Explore";
import Live from "../components/Live";
import Potential from "../components/Potential";
import Faq from "../components/Faq";
import Ask from "../components/Ask";
// import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pi-Skilled</title>
      </Head>
      <Header />
      <Features />
      <Explore />
      <Live />
      <Potential />
      <Faq />
      <Ask />
      {/* <Testimonials /> */}
      <Blog />
      <Footer />
    </div>
  );
}
