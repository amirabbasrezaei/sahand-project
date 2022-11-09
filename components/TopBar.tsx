import { View, Text, Dimensions } from "react-native";
import React from "react";
import classNames from "classnames";
import { AngleLeftIcon, ThreeDotVerticalIcon } from "./svgs";
import { AnimatePresence, MotiView } from "moti";

type Props = {
  isProfileBig: boolean;
};

const TopBar = ({ isProfileBig }: Props) => {
  const { width } = Dimensions.get("window");
  return (
    <MotiView
      animate={{
        height: isProfileBig ? 0 : 80,
      }}
      transition={{
        delay: 50,
        type: "timing",
        duration: 300,
      }}
      style={{ width }}
      className={classNames(" flex  justify-center  bg-black")}
    >
      <AnimatePresence>
        {!isProfileBig ? (
          <MotiView
            key={"f3f3r"}
            from={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 10, type: "timing" }}
            style={{ width }}
            className="h-10 bg-transparent flex flex-row justify-between px-5 items-center"
          >
            <AngleLeftIcon classStyle="fill-white w-[25] h-[25]" />
            <ThreeDotVerticalIcon classStyle="fill-white w-[25] h-[25]" />
          </MotiView>
        ) : null}
      </AnimatePresence>
    </MotiView>
  );
};

export default TopBar;
