import { useEffect, useState } from "react";


function  UseDarkMode() {

    const [theme, setTheme] = useState("dark")
    const colorTheme= theme ? "light" : "dark"
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add("dark")
  }, [theme])

  return [colorTheme,setTheme]
}

export default UseDarkMode;
