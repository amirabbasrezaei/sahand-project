import { View, Text, Image } from "react-native";
import React from "react";

type Props = {};

const ProfileInfo = (props: Props) => {
  return (
    <View className="flex items-center w-full ">
      <View
        style={{ elevation: 10 }}
        className="w-[90] h-[90] -top-[30] bg-white absolute rounded-lg shadow-none"
      >
        <Image
          className="w-[90] h-[90] rounded-lg"
          source={require("../../assets/Images/ab.jpg")}
        />
      </View>
      <Text className="mt-16 font-bold text-lg">Alexis Mayboch</Text>
      <Text className="  text-base">22 friends</Text>
      <View className="flex flex-row mt-6">
        <View className="mr-4 border rounded-md flex items-center justify-center h-10 w-24 px-1">
          <Text>Message</Text>
        </View>
        <View className="rounded-md flex items-center justify-center h-10 w-24 px-1 bg-black">
          <Text className="text-white ">Friend</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileInfo;
