import { useEffect, useState } from "react";
import ClickAudio from "@/assets/audio/click.wav";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On mount, check localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (stored === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Whenever theme changes, update class on <html> and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // preload the sound for instant playback
  useEffect(() => {
    const audio = new Audio(ClickAudio);
    audio.load();
  }, []);

  const toggleTheme = () => {
    // for a click audio sound
    const audio = new Audio(ClickAudio);
    audio.play();

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
