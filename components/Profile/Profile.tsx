import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import Favorite from "../Favorite/Favorite";
import InsetShadow from "react-native-inset-shadow";
import { LinearGradient } from "expo-linear-gradient";
import ProfileInfo from "./ProfileInfo";
import Upcoming from "../Upcoming/Upcoming";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import classNames from "classnames";
import { AnimatePresence, MotiView } from "moti";
import { Motion } from "@legendapp/motion";
import TopBar from "../TopBar";

const ProfileNavigator = createNativeStackNavigator();

type Props = {};

const Profile = ({}: Props) => {
  const { height, width } = Dimensions.get("window");
  const [profileState, setProfileState] = useState("favorite");
  const [touchY, setTouchY] = useState(0);
  const [isProfileBig, setIsProfileBig] = useState(false);
  return (
    <Motion.View
      onTouchStart={(e) => setTouchY(e.nativeEvent.pageY)}
      onTouchEnd={(e) => {
        if (touchY - e.nativeEvent.pageY > 20) {
          setIsProfileBig(true);
        } else if (touchY - e.nativeEvent.pageY < -20) {
          setIsProfileBig(false);
        }
      }}
      style={{ width }}
      className="relative flex items-center flex-1 h-32  bg-gray-100 "
    >
      <TopBar isProfileBig={isProfileBig} />
      <ProfileInfo isProfileBig={isProfileBig} />
      <View className="w-full flex-1 bg-rose-300 rounded-t-[26px] mt-10">
        <View className="w-full   h-14  flex flex-row items-center justify-between px-16">
          <View onTouchEnd={() => setProfileState("upcoming")}>
            <Text
              className={classNames(
                "text-lg",
                profileState === "upcoming" ? "font-bold" : null
              )}
            >
              Upcoming
            </Text>
          </View>
          <View onTouchEnd={() => setProfileState("favorite")}>
            <Text
              className={classNames(
                "text-lg",
                profileState === "favorite" ? "font-bold" : null
              )}
            >
              Favorite
            </Text>
          </View>
        </View>
        <View className=" flex-grow rounded-t-[26px] bg-gray-100  relative  mt-33 flex flex-row">
          <AnimatePresence exitBeforeEnter>
            {profileState === "favorite" ? (
              <Favorite key={"f43f3g"} />
            ) : (
              <Upcoming key={"dagfeg4f23f4"} />
            )}
          </AnimatePresence>
        </View>
      </View>

      <LinearGradient
        className="h-[130]  w-full bg-transparent absolute bottom-0 "
        colors={["transparent", "rgb(240, 240, 240)"]}
      />
    </Motion.View>
  );
};

export default Profile;
