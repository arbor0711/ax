import { useEffect, useState } from "react";
import * as React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

interface Props {
  pageTitle?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  // Dark mode toggling
  const [theme, setTheme] = useState("light");

  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );
  const toggleMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  return (
    <div className="relative">
      <NavBar toggleMode={toggleMode} />
      <main>
        <h1 className="my-5 ml-14">{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
