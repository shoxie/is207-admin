import Cookies from "js-cookie";
import { VscThreeBars } from "react-icons/vsc";
import { ThemeContext } from "@context/Theme";
import { useContext, useEffect, useState } from "react";

export default function Header() {
  const [username, setUsername] = useState("Admin");
  const { showSideBar, setShowSideBar } = useContext(ThemeContext);

  useEffect(() => {
    let user = Cookies.get("username");
    console.log('user', user)
    if (user) setUsername(user);
  }, []);

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
