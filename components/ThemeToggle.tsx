import { useStore } from "@/app/store";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useStore(
    (state) => [state.theme, state.setTheme],
    shallow
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  }

  return (
    <div onClick={handleTheme} className="justify-self-end">
      ThemeToggle
    </div>
  );
}
