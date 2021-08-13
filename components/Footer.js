import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:px-16 pi-footer-bgc pt-5 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 md:p-5">
        <div className="col-span-1 text-center md:text-left">
          <div className="font-bold text-lg mb-3">Contact Us</div>
          <div className="mb-3">
            <span className="font-bold text-sm">Address: </span>
            <span className="text-sm">
              215 demo lane.<br></br> lorem ipsum, MA 01103
            </span>
          </div>
          <div className="mb-3">
            <span className="font-bold text-sm">Call: </span>
            <span className="text-sm">+1 698 598 8745</span>
          </div>
          <div>
            <span className="font-bold text-sm">Email: </span>
            <span className="text-sm">info@skillmetrics.com</span>
          </div>
        </div>
        <div className="col-span-3 md:px-12 lg:px-24 text-center md:text-left mt-12 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div className="col-span-1 ">
              <div className="font-bold text-lg mb-3 mt-3 md:mt-0">About Us</div>
              <Link href="#">
                <div className="text-sm cursor-pointer">Who we are</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">For Our Investors</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Join The Team</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Contact Us</div>
              </Link>
            </div>
            <div className="col-span-1">
              <div className="font-bold text-lg mb-3 mt-3 md:mt-0">Training</div>
              <Link href="#">
                <div className="text-sm cursor-pointer">Financial Services</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Healthcare</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Retail</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Insurance</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Banking</div>
              </Link>
            </div>
            <div className="col-span-1">
              <div className="font-bold text-lg mb-3 mt-3 md:mt-0">Events</div>
              <Link href="#">
                <div className="text-sm cursor-pointer">Financial Services</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Healthcare</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Retail</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Insurance</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Banking</div>
              </Link>
            </div>
            <div className="col-span-1">
              <div className="font-bold text-lg mb-3 mt-3 md:mt-0">Support</div>
              <Link href="#">
                <div className="text-sm cursor-pointer">Help</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Privacy Policy</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Terms and Conditions</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Payment Policy</div>
              </Link>
              <Link href="#">
                <div className="text-sm cursor-pointer">Placement Policy</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-5 mt-3 md:mt-0">
        <div className="col-span-1 px-56 md:px-0">
          <Link href="/">
            <Image src="/images/logo-black.svg" alt="pi-skilled" width={741} height={127} className="cursor-pointer" />
          </Link>
        </div>
        <div className="col-span-4"></div>
      </div> */}
      <div className="text-center text-xs mt-5 pb-5 p-2">
        &copy; {new Date().getFullYear()} <Link href="/">Skill Metrics</Link> |<Link href="#"> Terms & Condition</Link> | <Link href="#">Contact</Link> |{" "}
        <Link href="#">Legal</Link> | <Link href="#">Privacy</Link> | <Link href="#">Cookie Disclosure</Link> | <Link href="#">Sitemap</Link>
      </div>
    </div>
  );
}
