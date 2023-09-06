import { useStore } from "@/app/store";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const theme = useStore((state) => state.theme);

  return (
    <footer
      className={`border-t ${
        theme === "light" ? "border-t-black/50" : "border-t-white/50"
      }`}
    >
      <div className="flex justify-between max-w-custom mx-auto px-[24px] md:px-[103px] py-[26px]">
        <LanguageSwitcher />
        <p
          className={`text-[16px] font-medium tracking-[0.96px] ${
            theme === "light" ? "text-black/50" : "text-white/50"
          }`}
        >
          © Frederik Barbrè, 2023
        </p>
      </div>
    </footer>
  );
}
