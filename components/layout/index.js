import { useContext, useEffect } from "react";
import { ThemeContext } from "@context/Theme";
import SideBar from "./SideBar";
import Header from "./Header";
import { useRouter } from "next/router";
import { CgPlayListRemove } from "react-icons/cg";
import { AiOutlineBulb, AiFillBulb } from "react-icons/ai";
import Cookies from "js-cookie";

export default function Layout({ children }) {
  const { theme, toggleTheme, setShowSideBar, showSideBar } =
    useContext(ThemeContext);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/") {
      let token = Cookies.get("accessToken");
      if (!token) router.push("/");
    }
  }, [router.pathname]);

  return (
    <>
      {router.pathname !== "/" ? (
        <div className="fixed bottom-10 left-5 z-50">
          <div className="flex flex-row space-x-3 items-center">
            <div
              className="bg-yellow-600 p-2 shadow-md rounded cursor-pointer"
              onClick={(e) => setShowSideBar(!showSideBar)}
            >
              <CgPlayListRemove className="text-2xl" />
            </div>
            <div className={showSideBar ? "" : "hidden"} onClick={toggleTheme}>
              {theme === "dark" ? (
                <div className="bg-white rounded p-2">
                  <AiOutlineBulb className="text-2xl" />
                </div>
              ) : (
                <div className="bg-blueGray-600 rounded p-2">
                  <AiFillBulb className="text-2xl" />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`transition-all duration-500 w-screen h-screen flex ${theme}`}
      >
        {router.pathname !== "/" ? <SideBar /> : null}
        <div className="h-screen flex-1 overflow-auto bg-gray-200 dark:bg-blueGray-700 dark:text-white">
          {router.pathname !== "/" ? <Header /> : null}
          {children}
        </div>
      </div>
    </>
  );
}
