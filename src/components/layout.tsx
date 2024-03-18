import { useEffect, useState } from "react";
import * as React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

interface Props {
  pageTitle?: string;
  children?: React.ReactNode;
}

// Dark mode toggling
const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  // let localStorageTheme = typeof window !== undefined ? localStorage.theme : "light";
  // const [theme, setTheme] = useState(localStorageTheme || "light");
  // const colorTheme = theme === "light" ? "dark" : "light";

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   root.classList.remove(colorTheme);
  //   root.classList.add(theme);

  //   localStorage.setItem("theme", theme);
  // }, [theme, colorTheme]);

  // const [darkSide, setDarkSide] = React.useState(
  //   colorTheme === "dark" ? true : false
  // );
  // const toggleMode = () => {
  //   setTheme(colorTheme);
  //   setDarkSide(!darkSide);
  // };

  // Navbar scroll trigger

  // console.log("scroll position:", winScroll);
  // // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  // window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  //    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  //    if (st > lastScrollTop) {
  //       // downscroll code
  //    } else if (st < lastScrollTop) {
  //       // upscroll code
  //    } // else was horizontal scroll
  //    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  // }, false);

  //   const [currentScrollPos, setCurrentScrollPos] = useState(document.body.scrollTop || document.documentElement.scrollTop
  //     const handleScroll = () =>{
  //       let prevScrollPos = window.pageYOffset;
  // //     }
  //   useEffect(()=>{
  //     const winScroll =
  //   document.body.scrollTop || document.documentElement.scrollTop;
  //     window.addEventListener('scroll', handleScroll() )
  //   return
  //   })

  return (
    <div className="relative">
      <NavBar
      // toggleMode={toggleMode}
      />
      <main>
        <h1 className="">{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
