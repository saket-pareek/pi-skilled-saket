import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="mt-12">
      <div className="text-center font-bold text-5xl mb-5">Blog</div>
      <div className="px-8 md:px-20 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First column */}
          <div className="col-span-1">
            <div>
              <Image
                src="/images/blog1.jpg"
                alt="play"
                width={1024}
                height={682}
                className="rounded-t-lg"
              />
            </div>
            <div className="inline-block border-b-2 border-blue-500">
              <div className="font-bold">The Research Papers</div>
            </div>
            <div className="font-bold text-xl mt-3 mb-3">
              Get Noticed with Certified skills
            </div>
            <div className="font-bold mb-2">
              Skills-based hiring is on the rise
            </div>
            <div className="text-sm">
              According to new LinkedIn research, 69% of professionals think
              their skills are more important than college education when
              job-seeking, and more than 76% wish there was a way for hiring
              managers to verify their skills so they could stand out amongst
              other candidates. 87% of hirers agree the skills a candidate lists
              are crucial for them as they vet them...
            </div>
            <Link href="#">
              <div className="flex justify-end cursor-pointer">
                <div className="inline-block border-b-2 border-blue-500">
                  <div className="font-bold">Learn More ...</div>
                </div>
              </div>
            </Link>
          </div>
          {/* Second Column */}
          <div className="col-span-1">
            <div>
              <Image
                src="/images/blog2.jpg"
                alt="play"
                width={1024}
                height={682}
                className="rounded-t-lg"
              />
            </div>
            <div className="inline-block border-b-2 border-blue-500">
              <div className="font-bold">The Research Papers</div>
            </div>
            <div className="font-bold text-xl mt-3 mb-3">
              Skills of the future
            </div>
            <div className="font-bold mb-2">Top 10 Job Skills for 2025</div>
            <div className="text-sm">
              When the World Economic Forum &#40;WEF&#41; released a list of the
              top 10 skills for 2025 in October, the two highest-ranked spots
              went to skills that didn’t appear at all on WEF’s previous list:
              1&#41; analytical thinking and innovation, and 2&#41; active
              learning and learning strategies. Another skill cluster that
              didn’t make the previous list debuted at No. 5 — resilience,
              stress...
            </div>
            <Link href="#">
              <div className="flex justify-end cursor-pointer">
                <div className="inline-block border-b-2 border-blue-500">
                  <div className="font-bold">Learn More ...</div>
                </div>
              </div>
            </Link>
          </div>
          {/* Third column */}
          <div className="col-span-1">
            <div className="inline-block border-b-2 border-blue-500">
              <div className="font-bold">The Research Papers</div>
            </div>
            <div className="font-bold text-xl mt-3 mb-3">
              Skills of the future
            </div>
            <div className="font-bold mb-2">Top 10 Job Skills for 2025</div>
            <div className="text-sm">
              When the World Economic Forum &#40;WEF&#41; released a list of the
              top 10 skills for 2025 in October, the two highest-ranked spots
              went to skills that didn’t appear at all on WEF’s previous list:
              1&#41; analytical thinking and innovation, and 2&#41; active
              learning and learning strategies. Another skill cluster that
              didn’t make the previous list debuted at No. 5 — resilience,
              stress...
            </div>
            <Link href="#">
              <div className="flex justify-end cursor-pointer">
                <div className="inline-block border-b-2 border-blue-500">
                  <div className="font-bold">Learn More ...</div>
                </div>
              </div>
            </Link>
            <div className="inline-block border-b-2 border-blue-500">
              <div className="font-bold">The Research Papers</div>
            </div>
            <div className="font-bold text-xl mt-3 mb-3">
              Skills of the future
            </div>
            <div className="font-bold mb-2">Top 10 Job Skills for 2025</div>
            <div className="text-sm">
              When the World Economic Forum &#40;WEF&#41; released a list of the
              top 10 skills for 2025 in October, the two highest-ranked spots
              went to skills that didn’t appear at all on WEF’s previous list:
              1&#41; analytical thinking and innovation, and 2&#41; active
              learning and learning strategies. Another skill cluster that
              didn’t make the previous list debuted at No. 5 — resilience,
              stress...
            </div>
            <Link href="#">
              <div className="flex justify-end cursor-pointer">
                <div className="inline-block border-b-2 border-blue-500">
                  <div className="font-bold">Learn More ...</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
