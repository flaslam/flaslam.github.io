import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useIsMounted from "../hooks/use-is-mounted";

interface ThemeChangerProps {
  children: ReactNode;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  const mounted = useIsMounted();
  if (!mounted) return null;

  const clickHandler = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        return;
      case "light":
        setTheme("dark");
        return;
    }
  };

  return <button onClick={clickHandler}>{children}</button>;
};

export default ThemeChanger;
