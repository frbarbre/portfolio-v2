import { useStore } from "@/app/store";
import SquareButton from "../shared/SquareButton";
import { motion as m, AnimatePresence } from "framer-motion";

interface Props {
  enText: string;
  daText: string;
  handleSubmit: () => void;
  timeLeft: number;
  isActive: boolean;
}

export default function Reload({
  enText,
  daText,
  handleSubmit,
  timeLeft,
  isActive,
}: Props) {
  const language = useStore((state) => state.language);
  const theme = useStore((state) => state.theme);

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <m.div
            initial={{ y: 300, scaleX: 0 }}
            animate={{ y: 0, scaleX: 1 }}
            exit={{ y: 300, scaleX: 0 }}
            className="fixed bottom-[50px] left-0 right-0 flex justify-center z-20"
          >
            <article
              className={`w-max flex gap-[30px] items-center ${
                theme === "light"
                  ? "bg-white border-[#CCCCCC]"
                  : "bg-near-black border-[#4B4B4B]"
              } border-[2px] px-sm py-[18px] rounded-[10px] relative overflow-hidden`}
            >
              <p className="uppercase text-[14px] font-semibold tracking-[0.84px]">
                {language === "en" ? enText : daText}
              </p>
              <div onClick={handleSubmit} className="cursor-pointer w-max">
                <SquareButton
                  daText={`Genindlæs (${
                    timeLeft < 0 ? 0 : timeLeft.toFixed(0)
                  })`}
                  enText={`Reload (${timeLeft < 0 ? 0 : timeLeft.toFixed(0)})`}
                  variant="reload"
                />
              </div>
              <m.div
                initial={{ width: "100%" }}
                animate={{
                  width: `${timeLeft * 10}%`,
                  transition: { duration: 1, type: "tween", ease: "linear" },
                }}
                className={`absolute bottom-0 left-0 h-[6px] ${
                  theme === "light" ? "bg-primary-light" : "bg-primary-dark"
                }`}
              />
            </article>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
