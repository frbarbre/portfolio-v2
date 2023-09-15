"use client";

import { useStore } from "@/app/store";
import { Fragment } from "react";
import Magnetic from "../shared/Magnetic";
import RoundButton from "../shared/RoundButton";

interface Props {
  isChallenge: boolean;
  challengeUrl?: string;
  daText: string;
  enText: string;
  liveUrl: string;
  githubUrl: string;
}

export default function WorkDescription({
  isChallenge,
  challengeUrl,
  daText,
  enText,
  liveUrl,
  githubUrl,
}: Props) {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const challengeType = handleChallengeType();

  function handleChallengeType() {
    if (challengeUrl?.includes("youtube")) {
      return "tutorial";
    } else if (challengeUrl?.includes("figma")) {
      return "design";
    } else if (challengeUrl?.includes("scrimba")) {
      return "course";
    } else {
      return "challenge";
    }
  }

  return (
    <section className="flex items-center justify-between mb-[100px] flex-col md:flex-row gap-[76px]">
      <p className="md:max-w-[530px] text-[20px] tracking-[1.2px] whitespace-pre-line">
        {language === "en" ? enText : daText}
        {isChallenge && (
          <>
            <br />
            <br />
            <a
              className={`${
                theme === "light" ? "text-primary-light" : "text-primary-dark"
              } underline hover:opacity-80 transition-opacity`}
              target="_blank"
              href={challengeUrl}
            >
              Go to {challengeType}
            </a>
          </>
        )}
      </p>
      <div className="relative">
        <div>
          <div className="hidden lg:block">
            <Magnetic padding="p-0">
              <a href={liveUrl} target="_blank">
                <RoundButton daText="Webside" enText="Live Site" variant="lg" />
              </a>
            </Magnetic>
          </div>

          <div className="lg:hidden">
            <a href={liveUrl} target="_blank">
              <RoundButton daText="Webside" enText="Live Site" variant="lg" />
            </a>
          </div>
        </div>

        <div className="absolute top-[-45%] right-[-45%] translate-x-[-50%] translate-y-[50%]">
          <div className="hidden lg:block">
            <Magnetic padding="p-0">
              <a
                href={githubUrl}
                target="_blank"
                className={`${
                  theme === "light" ? "bg-white" : "bg-near-black"
                } rounded-full block hover:bg-transparent`}
              >
                <RoundButton fill daText="Kode" enText="Code" variant="sm" />
              </a>
            </Magnetic>
          </div>

          <div className="lg:hidden">
            <a
              href={githubUrl}
              target="_blank"
              className={`${
                theme === "light" ? "bg-white" : "bg-near-black"
              } rounded-full block hover:bg-transparent`}
            >
              <RoundButton fill daText="Kode" enText="Code" variant="sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
