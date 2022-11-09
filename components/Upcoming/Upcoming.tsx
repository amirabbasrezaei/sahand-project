import { View, Text, Dimensions } from "react-native";
import React from "react";
import { MotiView } from "moti";

type Props = {};

const Upcoming = (props: Props) => {
  const { width } = Dimensions.get("window");
  return (
    <MotiView
      style={{ width }}
      from={{ translateX: -width, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: -width, opacity: 0 }}
      transition={{ duration: 200, type: "timing", delay: 0 }}
      className="flex-grow rounded-t-[26px] flex justify-center items-center"
    >
      <Text className="font-bold text-xl">Upcoming !</Text>
    </MotiView>
  );
};

export default Upcoming;
