"use client";

import Lottie from "lottie-react";
import type { Animation } from "@lottie-animation-community/lottie-types";
type DeveloperProps = {
  source: object;
};

export default function Developer({source}:DeveloperProps) {
  return (
    <div
      className="  flex w-full items-center justify-center xl:justify-end overflow-hidden"
      aria-hidden="true"
    >
      <div className="relative  h-[99%] md:h-196  xl:h-160 2xl:h-160">
        <Lottie animationData={source} loop className="h-full w-full" />
      </div>
    </div>
  );
}