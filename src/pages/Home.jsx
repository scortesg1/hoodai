import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import Button from "../components/Button";

function Home() {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header
            {...slideAnimation("down")}
            className="flex w-full justify-between"
          >
            <img
              src="/icon.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Welcome
                <br className="xl:block hidden" />
                to Hoodai
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base lg:text-lg">
                Create a unique t-shirt with the power of this AI and 3D
                customization tool.
                <strong> Use your imagination</strong> and define your style.
              </p>
              <span className="text-sm">
                By <a href="https://github.com/scortesg1/" target="_blank" className="font-semibold text-[#2CAEA6]">Santiago Cortés</a>
              </span>

              <Button
                type="filled"
                title="Customize this T-Shirt"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-semibold text-sm"
              ></Button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home;
