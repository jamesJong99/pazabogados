"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <a href="#">
        <Image
          src="/images/logos/logo.png"
          className="h-[72px] w-auto"
          width={100}
          height={100}
          alt="logo"
          priority
        />
      </a>
    </div>
  );
};

