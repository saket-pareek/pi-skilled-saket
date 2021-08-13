import { useState } from "react";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

const tabs = [
  { name: "Why Us", href: "#", id: "One", current: false },
  { name: "Students", href: "#", id: "Two", current: false },
  { name: "Early Career", href: "#", id: "Three", current: true },
  { name: "Career Changers", href: "#", id: "Four", current: false },
  { name: "Professionals", href: "#", id: "Five", current: false },
];
function ShowVdo() {
  document.getElementById("video-desc").style.display = "block";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function TabOne() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 mt-12">
        <div className="col-span 1 bg-white shadow-xl">
          <div className="py-5 px-8">
            <p className="leading-7">
              <span className="text-2xl">W</span>hether you are student, early in your career or looking to change your career, our career-oriented learning
              program will enable to you to outlearn and outperform. Our network of professionals and industry thought leaders can guide you to success in
              whatever phase of career you are.
            </p>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="flex justify-center items-center">
            <div className="relative bg-unlock-bg rounded-lg bg-no-repeat bg-cover bg-center w-[576px] h-[384px]">
              <div className="cursor-pointer h-full w-full absolute overflow-hidden top-0 left-0 flex justify-center items-center" onClick={ShowVdo}>
                <Image src="/images/play-btn.svg" alt="Play" width={70} height={70} />
              </div>
              <div className="absolute top-0 left-0 bg-gray-900 hidden  h-full w-full overflow-hidden" id="video-desc">
                <ReactPlayer url="/videos/online-learning.mov" controls={true} width="576px" height="384px" playing={true} muted={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabTwo() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 mt-12">
        <div className="col-span 1 bg-white shadow-xl">
          <div className="py-5 px-8">
            <h2 className="text-3xl font-bold mb-8">Prepare for placement</h2>
            <div className="mb-4 text-lg leading-7">
              Enabling you to upgrade yourself to become your own best version and get your dream job through campus placement.
            </div>
            <div>
              <div className="mb-4 text-lg leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Gain mastery over the domain and skills that your target campus company needs.
              </div>
              <div className="mb-4 text-lg leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Interact with Industry practitioners, learn about challenges &amp; opportunities in the Industry.
              </div>
              <div className="mb-4 text-lg leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Leverage our research on Industry and sector to develop Industry POV.
              </div>
              <div className="mb-4 text-lg leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Acquire soft skills needed for cracking the campus interview.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="flex justify-center items-center">
            <div className="relative bg-unlock-bg rounded-lg bg-no-repeat bg-cover bg-center w-[576px] h-[384px]">
              <div className="cursor-pointer h-full w-full absolute overflow-hidden top-0 left-0 flex justify-center items-center" onClick={ShowVdo}>
                <Image src="/images/play-btn.svg" alt="Play" width={70} height={70} />
              </div>
              <div className="absolute top-0 left-0 bg-gray-900 hidden  h-full w-full overflow-hidden" id="video-desc">
                <ReactPlayer url="/videos/online-learning.mov" controls={true} width="576px" height="384px" playing={true} muted={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TabThree() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 mt-12">
        <div className="col-span 1 bg-white shadow-xl">
          <div className="py-5 px-8">
            <h2 className="text-3xl font-bold mb-5">Add wings to your career</h2>
            <div className="mb-4 leading-7">Enabling early career professionals to acquire pi-shaped skills that organizations today look for.</div>
            <div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Functional or Domain skill training for technology professionals.
              </div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Upskill business process operations associate to acquire technology skills.
              </div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Interact with Industry practitioners and learn how to grow in the Industry.
              </div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Acquire Industry certification to attract more employers.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="flex justify-center items-center">
            <div className="relative bg-unlock-bg rounded-lg bg-no-repeat bg-cover bg-center w-[576px] h-[384px]">
              <div className="cursor-pointer h-full w-full absolute overflow-hidden top-0 left-0 flex justify-center items-center" onClick={ShowVdo}>
                <Image src="/images/play-btn.svg" alt="Play" width={70} height={70} />
              </div>
              <div className="absolute top-0 left-0 bg-gray-900 hidden  h-full w-full overflow-hidden" id="video-desc">
                <ReactPlayer url="/videos/online-learning.mov" controls={true} width="576px" height="384px" playing={true} muted={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TabFour() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 mt-12">
        <div className="col-span 1 bg-white shadow-xl">
          <div className="py-5 px-8">
            <h2 className="text-3xl font-bold mb-5">Upskill and outperform</h2>
            <div className="mb-4 leading-7">Skill enablement and guidance for career changers to successful in new career.</div>
            <div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Business & technology skill training to upskill
              </div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Professional skill training
              </div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Mentoring by Industry practitioners
              </div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Acquire Industry certification to attract more employers.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="flex justify-center items-center">
            <div className="relative bg-unlock-bg rounded-lg bg-no-repeat bg-cover bg-center w-[576px] h-[384px]">
              <div className="cursor-pointer h-full w-full absolute overflow-hidden top-0 left-0 flex justify-center items-center" onClick={ShowVdo}>
                <Image src="/images/play-btn.svg" alt="Play" width={70} height={70} />
              </div>
              <div className="absolute top-0 left-0 bg-gray-900 hidden  h-full w-full overflow-hidden" id="video-desc">
                <ReactPlayer url="/videos/online-learning.mov" controls={true} width="576px" height="384px" playing={true} muted={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TabFive() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 mt-12">
        <div className="col-span 1 bg-white shadow-xl">
          <div className="py-5 px-8">
            <h2 className="text-3xl font-bold mb-5">Grow your network</h2>
            <div className="mb-4 leading-7">Enabling experienced professionals to understand the steps needed to achieve the career vision.</div>
            <div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Gain mastery over the domain, technology, and professional skills.
              </div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Get certified as a specialist in your domain.
              </div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                New opportunities as Industry mentors.
              </div>
              <div className="mb-4 leading-7 flex">
                <img src="/images/tick.png" alt="" className="w-5 h-5 mt-2 mr-3" />
                Network with peers in the industry, establish yourself as an Industry thought leader.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="flex justify-center items-center">
            <div className="relative bg-unlock-bg rounded-lg bg-no-repeat bg-cover bg-center w-[576px] h-[384px]">
              <div className="cursor-pointer h-full w-full absolute overflow-hidden top-0 left-0 flex justify-center items-center" onClick={ShowVdo}>
                <Image src="/images/play-btn.svg" alt="Play" width={70} height={70} />
              </div>
              <div className="absolute top-0 left-0 bg-gray-900 hidden  h-full w-full overflow-hidden" id="video-desc">
                <ReactPlayer url="/videos/online-learning.mov" controls={true} width="576px" height="384px" playing={true} muted={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Potential() {
  const [uiState, setUiState] = useState("One");

  return (
    <div className="flex justify-center mt-20">
      <div className="lg:h-[900px] relative">
        <div className="w-full 2xl:w-4/5 h-[110%] lg:h-[90%] 2xl:h-4/5 absolute top-0 right-0 bg-[#f2f6fc] z-[-10]"></div>
        <div className="w-2/5 h-1/2 absolute bottom-20 hidden 2xl:block left-0 bg-[#faf2f0] z-[-20]"></div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-2xl border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="container mx-auto overflow-hidden">
          <div className="hidden sm:block mt-12">
            <div className="text-5xl text-center font-bold mb-8">Unlock Your Potential</div>
            <div>
              <div className="flex justify-center">
                <nav className="-mb-px border-b border-gray-600 flex space-x-8 overflow-x-scroll md:overflow-auto" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <div
                      key={tab.name}
                      // href={tab.href}
                      className={classNames(
                        tab.id === uiState ? "border-red-500 text-red-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "whitespace-nowrap py-1 px-4 border-b font-bold tracking-wide text-lg"
                      )}
                      aria-current={tab.id ? "page" : undefined}
                      onClick={() => setUiState(tab.id)}>
                      {tab.name}
                    </div>
                  ))}
                </nav>
              </div>
              <div>{uiState === "One" && <TabOne />}</div>
              <div>{uiState === "Two" && <TabTwo />}</div>
              <div>{uiState === "Three" && <TabThree />}</div>
              <div>{uiState === "Four" && <TabFour />}</div>
              <div>{uiState === "Five" && <TabFive />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
