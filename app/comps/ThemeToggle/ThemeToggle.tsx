"use client";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import Image from "next/image";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <div id={styles["theme"]} onClick={toggle}>
      <Image
        alt="dark or light mode"
        src={theme == "light" ? "/icon-moon.svg" : "/icon-sun.svg"}
        width={26}
        height={26}
        loading="eager"
      />
    </div>
  );
}
