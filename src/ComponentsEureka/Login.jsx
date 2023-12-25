/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { useForm } from "react-hook-form";
import AuthContext from "../Context/AuthProvider";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [showPasssword, setShowPassword] = useState(false);
  const handlepassword = () => {
    setShowPassword((prev) => !prev);
  };

  const { setAuth } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    await axios
      .post(
        "https://cdn.defencepost.in/ches_team_app/index.php/apis/login",
        new URLSearchParams({
          username: data.username,
          password: data.password,
        })
      )
      .then((res) => {
        setAuth({
          token: res.data?.token,
          message: res.data.message,
          status: res.data.status,
          status_code: res.data.status_code,
        });
        console.log(res.data);
        reset();
        if (res.data?.token) {
          sessionStorage.setItem("token", JSON.stringify(res.data.token));

          return <Navigate to="/eureka" />;
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="h-screen bg-background-950 flex justify-center items-center">
      <div className=" flex xl:flex-row flex-col-reverse gap-10 overflow-hidden w-[90%] sm:w-2/4">
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 0.75)}
          className="flex-[0.75] bg-background-900/70 backdrop-blur-md py-4 p-3 sm:p-6 rounded-2xl">
          <h3 className={styles.sectionHeadText}>Login.</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mt-8 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Username</span>
              <input
                type="text"
                name="name"
                {...register("username")}
                required
                placeholder="Username"
                className="bg-text-100 py-4 px-6 placeholder:text-text-300 text-text-800 rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Password</span>

              <input
                type={showPasssword ? "text" : "password"}
                name="password"
                {...register("password")}
                required
                placeholder="password"
                className="select-none bg-text-100 py-4 px-6 placeholder:text-text-300 text-text-800 rounded-lg outline-none border-none font-medium"
              />
              <div
                onClick={handlepassword}
                className="
                right-[12%]
                top-[68%]
                sm:top-[70%]
                absolute
              text-text-800
              font-medium
              cursor-pointer
              text-3xl
              hover:text-text-700
              transition
              duration-200
              ease-in-out
              hover:underline">
                {showPasssword ? <IoMdEyeOff /> : <IoMdEye />}
              </div>
            </label>

            <button
              type="submit"
              className="bg-secondary-600 py-3 px-8 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800">
              Login
            </button>
          </form>
          {sessionStorage.getItem("token") && <Navigate to="/eureka" />}
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
