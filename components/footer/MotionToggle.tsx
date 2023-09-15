import { useStore } from "@/app/store";
import { shallow } from "zustand/shallow";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Reload from "./Reload";
import PopUpModal from "../shared/PopUpModal";
import SquareButton from "../shared/SquareButton";

export default function MotionToggle() {
  let isFirstTimeStorage: string | null;

  if (typeof window !== "undefined") {
    isFirstTimeStorage = localStorage.getItem("isFirstTime");
  }

  const [motion, setMotion] = useStore(
    (state) => [state.motion, state.setMotion],
    shallow
  );
  const motionMatch = window.matchMedia("(prefers-reduced-motion: reduce)");
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const [localMotion, setLocalMotion] = useState(
    motionMatch.matches ? false : true
  );
  const [timeLeft, setTimeLeft] = useState({ time: 0, isActive: false });
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("motion") === null ||
      isFirstTimeStorage === null
    ) {
      setMotion(motionMatch.matches ? "false" : "true");
      localStorage.setItem("motion", motionMatch.matches ? "false" : "true");
      setIsFirstTime(true);
    } else {
      setLocalMotion(localStorage.getItem("motion") === "true" ? true : false);
    }
  }, []);

  useEffect(() => {
    if (motion === localMotion.toString()) {
      setTimeLeft({ isActive: false, time: 0 });
    }
  }, [localMotion])

  function handleMotion() {
    setLocalMotion(!localMotion);
    localStorage.setItem("motion", localMotion ? "false" : "true");
    if (isFirstTimeStorage === "false") {
      setTimeLeft({ isActive: true, time: 10 });
    }
  }

  function handleSubmit() {
    setMotion(localMotion ? "true" : "false");
    localStorage.setItem("motion", localMotion ? "true" : "false");
    window.location.href = window.location.href;
  }

  function handleFirstTime() {
    localStorage.setItem("isFirstTime", "false");
    setIsFirstTime(false);
    handleSubmit();
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.time <= 0 && timeLeft.isActive) {
        handleSubmit();
      } else {
        if (timeLeft.time > 0) {
          setTimeLeft((prev) => ({
            ...prev,
            time: timeLeft.time - 1,
          }));
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="justify-self-end hidden lg:flex gap-2 items-center">
      <p className="uppercase text-[12px] tracking-[0.72px] font-medium">
        {language === "en" ? "Motion" : "Animationer"}
      </p>
      <Toggle
        handleMotion={handleMotion}
        localMotion={localMotion}
        theme={theme}
      />
      <Reload
        enText="A reload is required when switch motion."
        daText="En genindlæsning er påkrævet, når du skifter animationer."
        handleSubmit={handleSubmit}
        timeLeft={timeLeft.time}
        isActive={timeLeft.isActive}
      />
      <PopUpModal isOpen={isFirstTime} setIsOpen={handleFirstTime}>
        <section
          className={`p-sm border-[2px] rounded-[10px] flex flex-col items-center gap-2 ${
            theme === "light" ? "border-black/20" : "border-white/20"
          }`}
        >
          <h2
            className={`text-[24px] uppercase tracking-[1.44px] font-bold ${
              theme === "light" ? "text-primary-light" : "text-primary-dark"
            }`}
          >
            {language === "en" ? "Hello there👋" : "Hej med dig👋"}
          </h2>
          <p className="text-[16px] tracking-[0.96px] text-center leading-relaxed font-regular max-w-[350px] whitespace-pre-line">
            {language === "en"
              ? `My portfolio includes alot of animations, which for some people can cause motion sickness, you can toggle them on/off here.`
              : `Min portfolio inkluderer mange animationer, som for nogle mennesker kan forårsage utilpashed, du kan slå dem til eller fra her.`}
          </p>
          <div className="flex gap-2 items-center my-[12px]">
            <p className="uppercase text-[12px] tracking-[0.72px] font-medium">
              {language === "en" ? "OFF" : "FRA"}
            </p>
            <Toggle
              handleMotion={handleMotion}
              localMotion={localMotion}
              theme={theme}
            />
            <p className="uppercase text-[12px] tracking-[0.72px] font-medium">
              {language === "en" ? "ON" : "TIL"}
            </p>
          </div>
          <div onClick={handleFirstTime} className="w-full max-w-[250px]">
            <SquareButton
              enText="Apply Changes"
              daText="Anvend ændringer"
              variant="reload"
            />
          </div>
          <p className="text-[10px] tracking-[0.6px] pt-[6px]">
            {language === "en"
              ? "Setting can be changed at any time in the footer."
              : "Indstillingen kan ændres når som helst i footeren."}
          </p>
        </section>
      </PopUpModal>
    </div>
  );
}

export function Toggle({
  handleMotion,
  theme,
  localMotion,
}: {
  handleMotion: () => void;
  theme: string;
  localMotion: boolean;
}) {
  return (
    <button onClick={handleMotion}>
      <div
        className={`w-[53px] h-[27px] border rounded-full relative flex items-center ${
          theme === "light" ? "border-black/20" : "border-white/20"
        }`}
      >
        <m.div
          animate={localMotion ? { x: 29 } : { x: 5 }}
          className={`w-[17px] h-[17px] translate-x-[5px] rounded-full absolute flex items-center justify-center  ${
            localMotion ? "bg-emerald-500" : "bg-red-500"
          }`}
        />
      </div>
    </button>
  );
}
