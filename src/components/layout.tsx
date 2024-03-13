import { useEffect, useState } from "react";
import * as React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

interface Props {
  pageTitle?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const [darkSide, setDarkSide] = React.useState(
    colorTheme === "dark" ? true : false
  );
  const toggleMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };
  return (
    <>
      <NavBar toggleMode={toggleMode} />
      <main>
        <h1 className="">{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
