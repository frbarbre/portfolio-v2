"use client";

import { useStore } from "@/app/store";

export default function Loading() {
  const theme = useStore((state) => state.theme);

  return (
    <div className="flex justify-center items-center min-h-[100svh]">
      <div className={`animate-spin`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M15.8423 29.2583C8.6846 29.159 2.84255 23.3169 2.74327 16.1592C2.64525 9.15726 7.96456 3.37677 14.7767 2.73841C15.4855 2.67181 16.0321 2.08496 16.0321 1.37371C16.0321 0.571984 15.3447 -0.066383 14.5468 0.00775799C5.24647 0.861008 -1.7542 9.65614 0.388353 19.5521C1.56204 24.9732 7.02837 30.4395 12.4482 31.6119C22.3429 33.7532 31.1393 26.7538 31.9938 17.4548C32.0667 16.6555 31.4295 15.9694 30.6278 15.9694C29.9153 15.9694 29.3297 16.5161 29.2631 17.2248C28.6248 24.037 22.8443 29.3563 15.8423 29.2583Z"
            fill={theme === "light" ? "#2764FF" : "#FFD02A"}
          />
        </svg>
      </div>
    </div>
  );
}
