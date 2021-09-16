import { useState, useRef } from "react";
import authApi from "@api/authApi";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Home() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const data = useRef(null);
  const router = useRouter();

  function signIn(e) {
    e.preventDefault();
    authApi
      .signIn(user)
      .then((res) => {
        Cookies.set("accessToken", res.accessToken);
        Cookies.set("refreshToken", res.refreshToken);
        Cookies.set("username", res.username);

        Swal.fire({
          icon: "success",
          text: `Welcome back, ${res.username}`,
          timer: 3000,
        }).then(() => router.push("/admin"));
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          text: e,
        });
      });
  }
  return (
    <div className="login-bg bg-cover bg-no-repeat flex items-center justify-center h-screen w-full">
      <div className="flex flex-row items-center justify-center bg-white rounded-xl p-10 space-x-40">
        <div>
          <img src="./images/computer.png" alt="" />
        </div>
        <form ref={data}>
          <div className="flex flex-col space-y-5">
            <div className="text-center">
              <span className="font-bold text-xl">Member login</span>
            </div>
            <div className="flex flex-col space-y-5 w-full">
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="John doe"
                  name="username"
                  className="border-b-2 focus:border-black transition-all duration-500"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  placeholder="Your password"
                  name="password"
                  type="password"
                  className="border-b-2 focus:border-black transition-all duration-500"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1, borderColor: "#00bcd4" }}
                  animate={{ scale: 1 }}
                  onClick={signIn}
                  className="py-3 w-full rounded-full hover:bg-white hover:text-green-400 text-white bg-green-400 transition-all duration-300"
                >
                  Sign in
                </motion.button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
