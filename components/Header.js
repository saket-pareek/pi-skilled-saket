import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="header bg-cover h-[918px] bg-hero-home">
        <nav className="nav bg-white bg-opacity-80">
          <div className="container mx-auto flex flex-col pt-4 pb-2">
            <div className="contact hidden sm:flex self-end gap-12">
              <div className="number">+1 698 598 8745</div>
              <div className="email">info@skillmetrics.com</div>
              <div className="language flex">
                <div className="flag">
                  <img src="/images/us-flag.svg" alt="" />
                </div>
                <div className="country ml-5">En</div>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo-black.svg" alt="pi-skilled" className="cursor-pointer w-60 lg:w-80" />
                </Link>
              </div>
              <div className="header-btn items-center gap-12 hidden sm:flex">
                <div className="login">Login</div>
                <div className="register border border-black rounded-md px-10 py-2">Register</div>
              </div>
              <img src="/images/menu.png" alt="" className="w-10 h-10 sm:hidden" />
            </div>
          </div>
        </nav>
        <section className="hero pt-40">
          <div className="container mx-auto">
            <h1 className="heading text-white text-center lg:text-left font-semibold text-5xl sm:text-6xl leading-relaxed">Are you pi-skilled?</h1>
            <div className="flex items-center justify-center lg:justify-start xl:items-end space-x-64 text-center lg:text-left">
              <p className="sub w-11/12 lg:w-1/2 text-white mt-10 sm:mt-20 text-lg sm:text-2xl tracking-wide">
                Digital is disrupting traditional business models. Organizations with Nimble & Agile teams, comprising of multifaceted employees with skills
                that resemble the Greek letter pi (π) are leading the change.
              </p>
              <img src="/images/play-btn.svg" alt="" className="w-36 h-36 hidden lg:block mt-12" />
            </div>
            <div className="cta flex items-center mt-20 justify-center lg:justify-start">
              <label htmlFor="" className="relative flex flex-wrap">
                <img src="/images/search.svg" alt="" className="absolute top-3 left-0 w-9 pl-2" />
                <input
                  type="text"
                  id="message"
                  name="message"
                  className="outline-none pl-12 text-lg pr-12 w-full sm:w-min sm:pr-44 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-r-xl sm:rounded-r-none rounded-l-xl"
                  placeholder="Course title or keyword"
                />
                <button className="hello bg-blue-700 text-white text-lg w-full sm:w-32 mt-6 sm:mt-0 py-3 px-8 rounded-l-xl sm:rounded-l-none rounded-r-xl">
                  Search
                </button>
              </label>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
