"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroText from "./HeroText";
import heroPic from "../../../public/images/hero.png";
import Image from "next/image";
import ScrollCursor from "../../shared/ScrollCursor";
import { useState } from "react";
import { cursorAnimation } from "@/lib/animations";
import { useStore } from "@/app/store";

export default function Hero() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  const [isCursorActive, setIsCursorActive] = useState(false);
  const motion = useStore((state) => state.motion);

  useEffect(() => {
    gsap.config({
      nullTargetWarn: false,
    });
    if (motion === "true") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-500px",
      });
    }
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.03 * direction;
  };

  return (
    <section
      className="relative flex min-h-hero overflow-hidden bg-no-repeat bg-cover"
      onMouseEnter={() => setIsCursorActive(true)}
      onMouseLeave={() => setIsCursorActive(false)}
    >
      <Image
        src={heroPic}
        alt="HeroPicture"
        width={2510}
        height={1200}
        placeholder="blur"
        className="object-cover object-center h-hero w-full"
      />
      <h1 className="absolute bottom-[30px]">
        <strong ref={slider} className="block relative whitespace-nowrap">
          <HeroText reference={firstText} />
          <HeroText reference={secondText} isSecondText />
        </strong>
      </h1>
      <ScrollCursor
        active={isCursorActive}
        animationVariant={cursorAnimation}
        enText="Scroll"
        daText="Scroll"
      />
    </section>
  );
}
