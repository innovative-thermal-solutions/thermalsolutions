"use client";

import React from "react";
import Image from "next/image";

const CUSTOMERS = [
  {
    name: "Caterpillar",
    logo: "/images/customers/caterpillar.png",
    width: 140,
    height: 120,
    className: "h-14 sm:h-16 w-auto object-contain",
  },
  {
    name: "ChargePoint",
    logo: "/images/customers/chargepoint.png",
    width: 220,
    height: 70,
    className: "h-9 sm:h-11 w-auto object-contain",
  },
  {
    name: "Eaton",
    logo: "/images/customers/eaton.png",
    width: 200,
    height: 80,
    className: "h-11 sm:h-13 w-auto object-contain",
  },
  {
    name: "Innomotics",
    logo: "/images/customers/innomotics.png",
    width: 220,
    height: 70,
    className: "h-9 sm:h-11 w-auto object-contain",
  },
  {
    name: "Teledyne Technologies",
    logo: "/images/customers/teledyne.png",
    width: 220,
    height: 70,
    className: "h-10 sm:h-12 w-auto object-contain",
  },
];

export function ReferenceCustomersSection() {
  return (
    <section id="customers" className="relative w-full py-20 px-6 sm:px-8 lg:px-12 bg-[#f4f6f4] border-t border-[#d8e0dc]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#00747a] uppercase font-bold">
            OUR CUSTOMERS
          </p>
          <div className="w-12 h-0.5 bg-[#00747a]/40 mx-auto mt-3" />
        </div>

        {/* Logos Flex/Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 items-center justify-items-center">
          {CUSTOMERS.map((customer) => (
            <div
              key={customer.name}
              className="w-full flex items-center justify-center p-4 transition-all duration-300 opacity-95 hover:opacity-100 hover:scale-105"
            >
              <Image
                src={customer.logo}
                alt={`${customer.name} logo`}
                width={customer.width}
                height={customer.height}
                className={customer.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

