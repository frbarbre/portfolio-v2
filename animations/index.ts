import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      xPercent: 0,
    })
      .to(transitionElement, {
        xPercent: 100,
        duration: 1.3,
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: "50vh",
          borderBottomLeftRadius: "50vh",
          duration: 0.7,
        },
        "<"
      );
  }
};

export const animatePageOut = (
  href: string,
  router: AppRouterInstance,
  isBack?: boolean
) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      xPercent: -100,
      borderTopRightRadius: "50vh",
      borderBottomRightRadius: "50vh",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    })
      .to(animationWrapper, {
        xPercent: 0,
        duration: 1.3,
        onComplete: () => {
          if (isBack) {
            router.back();
          } else {
            router.push(href);
          }
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          duration: 0.7,
        },
        "<"
      );
  }
};
