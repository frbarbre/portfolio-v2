"use client";

import { useStore } from "@/app/store";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton({ isInArchive, href }: { isInArchive?: boolean, href?: string }) {
  const theme = useStore((state) => state.theme);
  const router = useRouter();
  const pathname = usePathname();

  function handleBack() {
    if (href) {
      router.push(href);
      return;
    } else {
      router.back();
    }
  }

  return (
    <Image
      src={theme === "light" ? "/arrow-blue.svg" : "/arrow-dark.svg"}
      alt="back-button"
      width={55}
      height={30}
      onClick={handleBack}
      className="cursor-pointer w-[30px] md:w-[55px] py-[30px] md:py-[50px]"
    />
  );
}
