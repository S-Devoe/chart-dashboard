"use client";

import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface IDark {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<IDark>({
  isDark: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const isSystemInDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme:dark)").matches;

  const [isDark, setIsDark] = useState<boolean>(isSystemInDarkMode);

  useEffect(() => {
    const systemPrefDarkMode =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemPrefChange = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };

    systemPrefDarkMode.addEventListener("change", handleSystemPrefChange);

    return () => {
      systemPrefDarkMode.removeEventListener("change", handleSystemPrefChange);
    };
  }, []);

  const toggleDarkMode = (): void => {
    setIsDark((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}{" "}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => useContext(DarkModeContext);
export default useDarkMode;
