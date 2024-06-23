"use client";
import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image
        src="/images/logos/logo.png"
        className="h-[72px] w-auto"
        width={100}
        height={100}
        alt="logo"
        priority
      />
    </div>
  );
};

