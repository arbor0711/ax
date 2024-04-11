import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import NavBar from "./navBar";
import Footer from "./footer";
import LoadingComponent from "./loadingComponent";

interface Props {
  pageTitle?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  // Delays the rendering of the children components until the theme is loaded
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // Dark mode toggling
  const { theme, toggleTheme } = useTheme();
  const colorTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    // localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <div className="relative">
      <NavBar toggleMode={toggleTheme} />
      <main>
        <h1 className="my-5 ml-14">{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
