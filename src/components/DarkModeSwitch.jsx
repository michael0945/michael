"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState();
  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system " ? systemTheme : theme;
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}
