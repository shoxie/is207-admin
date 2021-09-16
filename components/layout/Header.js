import Cookies from "js-cookie";
import { VscThreeBars } from "react-icons/vsc";
import { ThemeContext } from "@context/Theme";
import { useContext } from "react";
export default function Header() {
  const username = Cookies.get("username") || "Admin";
  const { showSideBar, setShowSideBar } = useContext(ThemeContext);
  return (
    <nav className="w-full h-16 px-4 bg-white dark:bg-gray-900 dark:text-white flex flex-row justify-between items-center shadow-md">
      <div
        onClick={(e) => setShowSideBar(!showSideBar)}
        className="flex flex-row items-center space-x-5"
      >
        <div className="hover:cursor-pointer">
          <VscThreeBars />
        </div>
        <div>
          <span className="font-bold">Hi, {username}</span>
        </div>
      </div>
      <div>Sign out</div>
    </nav>
  );
}
