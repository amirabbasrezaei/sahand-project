import { View, Text, ScrollView, Dimensions, StatusBar } from "react-native";
import React from "react";
import FavoriteCard from "./FavoriteCard";

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
  const statusBarHeight = StatusBar?.currentHeight ? StatusBar.currentHeight : 0
  const windowHeight = Dimensions.get("window").height
  const NAVIGATION_BAR_HEIGHT = Dimensions.get("screen").height - (windowHeight + statusBarHeight)

  return (
    <View style={{elevation:10, marginBottom: NAVIGATION_BAR_HEIGHT}} className="h-10 bg-rose-300 w-full rounded-t-[26px] flex-grow mt-8">
      <View className="w-full flex flex-row px-16 items-center justify-between h-14">
        <Text className="text-xl">Upcoming</Text>
        <Text className="text-xl font-bold">Favorite</Text>
      </View>
      <View className="rounded-t-[26px]  bg-gray-100 flex-grow ">
        <ScrollView  className="flex-grow w-full px-4 pt-4 mt-4 rounded-t-[26px] mb-4">
          {favorites.map((favorite, index) => (
            <FavoriteCard key={index} favorite={favorite} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Favorite;
