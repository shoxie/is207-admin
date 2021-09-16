import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaBlogger } from "react-icons/fa";
import { TiTimesOutline } from "react-icons/ti";
import { VscSettingsGear } from "react-icons/vsc";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillBagFill, BsFillTagFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiCoupon2Fill } from "react-icons/ri";
import { SiCampaignmonitor } from "react-icons/si";
import { ThemeContext } from "@context/Theme";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const { showSideBar, theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={
          showSideBar
            ? `p-5 font-semibold w-screen h-screen md:w-64 bg-white dark:bg-blueGray-800 transition-all duration-500`
            : `w-0 transition-all`
        }
      >
        <div className="w-full h-16 border-b-2">
          <h1 className="text-xl text-black dark:text-white">IS207 Admin</h1>
        </div>
        <div className="text-gray-400 flex flex-col space-y-5 pt-5">
          <div
            className={
              router.pathname === "/admin/dashboard"
                ? "bg-gray-200 dark:bg-gray-800 dark:text-white text-black rounded-2xl p-3 hover:cursor-pointer"
                : "hover:cursor-pointer"
            }
          >
            <Link href="/admin/dashboard">
              <div className="flex flex-row items-center space-x-3">
                <AiFillDashboard className="text-2xl" />
                <span>Dashboard</span>
              </div>
            </Link>
          </div>
          <div
            className={
              router.pathname === "/admin/product_detail"
                ? "bg-gray-200 dark:bg-gray-800 dark:text-white text-black rounded-2xl p-3 hover:cursor-pointer"
                : "hover:cursor-pointer"
            }
          >
            <Link href="/admin/product_detail">
              <div className="flex flex-row items-center space-x-3">
                <AiFillDashboard className="text-2xl" />
                <span>Product detail</span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
