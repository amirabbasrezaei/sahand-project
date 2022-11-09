import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React from "react";
import Favorite from "./Favorite";
import InsetShadow from "react-native-inset-shadow";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

const Profile = (props: Props) => {
  const { height, width } = Dimensions.get("window");
  return (
    <View
      style={{ width }}
      className="relative flex items-center flex-1 h-32  bg-gray-100 rounded-t-[26px]"
    >
      <View className="flex items-center w-full ">
        <View
          style={{ elevation: 10 }}
          className="w-[90] h-[90] -top-[30] bg-white absolute rounded-lg shadow-none"
        >
          <Image
            className="w-[90] h-[90] rounded-lg"
            source={require("../assets/Images/ab.jpg")}
          />
        </View>
        <Text className="mt-16 font-bold text-lg">Alexis Mayboch</Text>
        <Text className="  text-base">22 friend</Text>
        <View className="flex flex-row mt-6">
          <View className="mr-4 border rounded-md flex items-center justify-center h-10 w-24 px-1">
            <Text>Message</Text>
          </View>
          <View className="rounded-md flex items-center justify-center h-10 w-24 px-1 bg-black">
            <Text className="text-white ">Friend</Text>
          </View>
        </View>
      </View>
      <Favorite />
      <LinearGradient className="h-[130]  w-full bg-transparent absolute bottom-0 " colors={["transparent", "rgb(240, 240, 240)"]}   />

    </View>
  );
};

export default Profile;
