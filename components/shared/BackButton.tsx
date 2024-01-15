"use client";

import { useStore } from "@/app/store";
import Link from "@/components/shared/Link";
import { useRouter } from "next/navigation";

export default function BackButton({ href }: { href?: string }) {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);

  return (
    <Link
      routeName={language === "en" ? "Going back..." : "Går tilbage..."}
      href={href || "/works"}
      isBack={!href}
    >
      <img
        src={theme === "light" ? "/arrow-blue.svg" : "/arrow-dark.svg"}
        alt="back-button"
        width={55}
        height={30}
        className="cursor-pointer w-[30px] md:w-[55px] py-[30px] md:py-[50px]"
      />
    </Link>
  );
}
