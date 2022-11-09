import { View, Text, ScrollView, Dimensions, StatusBar } from "react-native";
import React from "react";
import FavoriteCard from "./FavoriteCard";
import { MotiView } from "moti";

type Props = {};

export interface FavoriteCardType {
  name: string;
  stars: number;
  address: string;
  image: string;
}

const favorites = [
  {
    name: "Meiam Hotel",
    stars: 4,
    address: "Hawai, 3.67m from Honolulu",
    image: "../assets/Images/33060654.jpg",
  },
  {
    name: "Meiam Hotel",
    stars: 4,
    address: "Hawai, 3.67m from Honolulu",
    image: "../assets/Images/33060654.jpg",
  },
  {
    name: "Meiam Hotel",
    stars: 4,
    address: "Hawai, 3.67m from Honolulu",
    image: "../assets/Images/33060654.jpg",
  },
];

const Favorite = (props: Props) => {
  const { width } = Dimensions.get("window");
  const statusBarHeight = StatusBar?.currentHeight
    ? StatusBar.currentHeight
    : 0;
  const windowHeight = Dimensions.get("window").height;
  const NAVIGATION_BAR_HEIGHT =
    Dimensions.get("screen").height - (windowHeight + statusBarHeight);

  return (
    <MotiView
      style={{ width }}
      from={{ translateX: width, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: width, opacity: 0 }}
      transition={{ duration: 200, type: "timing", delay: 0 }}
      className="rounded-t-[26px]   flex-grow "
    >
      <ScrollView className="flex-grow w-full px-4 pt-4  rounded-t-[26px] mb-10">
        {favorites.map((favorite, index) => (
          <FavoriteCard key={index} favorite={favorite} />
        ))}
      </ScrollView>
    </MotiView>
  );
};

export default Favorite;
