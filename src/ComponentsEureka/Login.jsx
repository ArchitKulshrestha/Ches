/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { useForm } from "react-hook-form";
import AuthContext from "../Context/AuthProvider";
import { useContext } from "react";

import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
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
          localStorage.setItem("token", JSON.stringify(res.data.token));

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
    <section className="h-screen bg-background-950  pt-20 sm:px-20 px-10">
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden sm:w-4/6 ">
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 0.75)}
          className="flex-[0.75] bg-background-900/70 backdrop-blur-md py-4 p-2 sm:p-6 rounded-2xl">
          <h3 className={styles.sectionHeadText}>Login.</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col gap-8">
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
                type="password"
                name="password"
                {...register("password")}
                required
                placeholder="password"
                className="bg-text-100 py-4 px-6 placeholder:text-text-300 text-text-800 rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-secondary-600 py-3 px-8 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800">
              Login
            </button>
          </form>
          {localStorage.getItem("token") && <Navigate to="/eureka" />}
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
