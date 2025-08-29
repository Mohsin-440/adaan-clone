"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Climate and energy",
    description:
      "Our efforts towards GHG emissions reduction and efficient resource utilization across our operations.",
    image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
    href: "#",
  },
  {
    title: "People and safety",
    description:
      "Supporting our people and our communities.",
    image: "https://images.pexels.com/photos/3855961/pexels-photo-3855961.jpeg",
    href: "#",
  },
  {
    title: "Biodiversity initiatives",
    description:
      "Investing in the preservation and restoration of our natural ecosystems.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    href: "#",
  },
];

const SustainabilitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1250px] mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div>
            <p className="uppercase tracking-widest text-[#1f1f1f] text-sm mb-5">
              Sustainability
            </p>
            <h2 className="text-[28px] md:text-[40px] font-normal text-[#1f1f1f] max-w-[600px] mb-4">
                Environmental protection
            </h2>
            <p className="text-[#1f1f1f] text-lg font-light mb-[22px] max-w-[600px]">
              As our business operations expand, so do the actions we undertake
              aimed at protecting ecosystems and supporting the energy and
              materials transitions.
            </p>
          </div>

          <div className="text-blue-400 flex items-center gap-3 text-sm font-medium group ">
            Aramco & Sustainability
            <Link href={"#"} className="">
              <div className="flex flex-col justify-between items-center">
                {/* Arrow */}
                <motion.span
                  className="self-end inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-full border-2"
                  whileHover={{ x: [0, 6, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                    className="arrow-icon"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                      fill="currentColor"
                    />{" "}
                  </svg>
                </motion.span>
              </div>
            </Link>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group block"
            >
              <div className="relative h-[220px] lg:h-[240px] overflow-hidden rounded-xl mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#1f1f1f] mb-2">
                {item.title}
              </h3>
              <p className="text-[#1f1f1f] mb-8 text-lg font-light">
                {item.description}
              </p>
              <span className="text-blue-400 flex items-center gap-2 text-sm font-medium">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                    fill="currentColor"
                  />
                </motion.svg>
                Read more
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
