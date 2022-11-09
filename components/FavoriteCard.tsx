import { View, Text, Image } from "react-native";
import React from "react";
import { FavoriteCardType } from "./Favorite";
import { LocationIcon, ShareIcon, StarIcon } from "./svgs";
type Props = {
  favorite: FavoriteCardType;
};

const FavoriteCard = ({ favorite }: Props) => {
  return (
    <View  className="h-fit w-full bg-white  rounded-[26px] p-4 mb-4 border border-gray-200">
      <Image
        className="w-full h-[150] rounded-[26px]"
        source={require("../assets/Images/33060654.jpg")}
      />
      <Text className="font-bold text-lg mt-3">{favorite.name}</Text>
      <View className="flex flex-row mt-2">
        {Array(favorite.stars)
          .fill(" ")
          .map((_, index) => (
            <View key={index} className="w-[12] h-[12] mr-1">
              <StarIcon classStyle="fill-black w-[12] h-[12]" />
            </View>
          ))}
      </View>
      <View className="flex flex-row items-center mt-2">
        <View className="w-4 h-4 mr-2 ">
          <LocationIcon classStyle="fill-gray-500 w-4 h-4 " />
        </View>
        <Text className="text-gray-500">{favorite.address}</Text>
      </View>
      <View className="w-full flex flex-row h-8 items-center mt-3">
        <View className="flex items-center justify-center h-10 bg-black rounded-lg flex-grow mr-3">
          <Text className="text-white ">View Details</Text>
        </View>
        <View className="h-8 w-8">
          <ShareIcon classStyle="fill-black h-8 w-8" />
        </View>
      </View>
    </View>
  );
};

export default FavoriteCard;
