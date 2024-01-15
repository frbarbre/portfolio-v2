"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
import { ReactNode } from "react";
import { useRouteStore, useStore } from "@/app/store";
import useScreenSize from "@/hooks/useScreenSize";

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isBack,
  routeName,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isBack?: boolean;
  routeName: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const setRoute = useRouteStore((state) => state.setRoute);
  const motion = useStore((state) => state.motion);
  const screenSize = useScreenSize();

  const isMobile = screenSize.width < 815;

  const handleClick = () => {
    if (onClick) onClick();
    if (pathname !== href) {
      if (motion === "true" && !isMobile) {
        animatePageOut(href, router, isBack);
        setRoute(routeName);
      } else {
        if (isBack) {
          router.back();
        } else {
          router.push(href);
        }
      }
    }
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
