import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Live() {
  return (
    <div className="mt-5 md:mt-24 py-8 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1 hidden lg:block">
          <Image src="/images/live-session.jpg" alt="play" width={1200} height={1080} className="lg:rounded-r-lg" />
        </div>
        <div className="col-span-1 flex justify-center items-center px-8">
          <div className="">
            <div className="text-5xl text-center lg:text-left font-bold">Live Session with Industry Experts</div>
            <div className="text-lg mt-5 text-center lg:text-left">
              Interactive sessions with industry experts to enabling you to get learn different perspective on industry challenges and opportunities to solve
              them. Leverage expert sessions to validate viability of your solution ideas and get guidance on implementation of solution idea.
            </div>
            <Link href="#">
              <div className="mt-5 flex justify-center lg:block">
                <div className="bg-blue-900 inline-block rounded cursor-pointer hover:bg-blue-600">
                  <h5 className="text-xl text-white px-8 py-2">Learn More</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
