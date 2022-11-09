import { View, Text, Image } from "react-native";
import React from "react";
import { MotiImage, MotiText, MotiView } from "moti";

type Props = {
  isProfileBig: boolean;
};

const ProfileInfo = ({ isProfileBig }: Props) => {
  return (
    <View className="w-full bg-black">
      <MotiView
        animate={{
          borderTopLeftRadius: isProfileBig ? 0 : 30,
          borderTopRightRadius: isProfileBig ? 0 : 30,
        }}
        className="flex items-center w-full bg-gray-100"
      >
        <MotiView
          animate={{
            position: isProfileBig ? "block" : "absolute",
            top: isProfileBig ? 0 : -30,
            marginTop: isProfileBig ? 10 : 0,
            height: isProfileBig ? 150 : 90,
            width: isProfileBig ? 150 : 90,
            borderRadius: isProfileBig ? 80 : 30,
          }}
          transition={{
            type: "timing",
            duration: 300,
          }}
          style={{ elevation: 10 }}
          className=" bg-white   shadow-none"
        >
          <MotiImage
            animate={{
              borderRadius: isProfileBig ? 80 : 30,
            }}
            transition={{
              type: "timing",
              duration: 300,
            }}
            className="w-full h-full "
            source={require("../../assets/Images/ab.jpg")}
          />
        </MotiView>
        <MotiText
          animate={{
            marginTop: isProfileBig ? 170 : 70,
          }}
          transition={{
            type: "timing",
            duration: 300,
          }}
          className=" font-bold text-lg"
        >
          Alexis Mayboch
        </MotiText>
        <Text className="  text-base">22 friends</Text>
        <View className="flex flex-row mt-6">
          <View className="mr-4 border rounded-md flex items-center justify-center h-10 w-24 px-1">
            <Text>Message</Text>
          </View>
          <View className="rounded-md flex items-center justify-center h-10 w-24 px-1 bg-black">
            <Text className="text-white ">Friend</Text>
          </View>
        </View>
      </MotiView>
    </View>
  );
};

export default ProfileInfo;
