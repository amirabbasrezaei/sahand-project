import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import Favorite from "../Favorite/Favorite";
import InsetShadow from "react-native-inset-shadow";
import { LinearGradient } from "expo-linear-gradient";
import ProfileInfo from "./ProfileInfo";
import Upcoming from "../Upcoming/Upcoming";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import classNames from "classnames";

const ProfileNavigator = createNativeStackNavigator();

type Props = {
};

const Profile = ({}: Props) => {
  const { height, width } = Dimensions.get("window");
  const navigator = useNavigation()
  const [profileState, setProfileState] = useState('favorite')
  return (
    <View
      style={{ width }}
      className="relative flex items-center flex-1 h-32  bg-gray-100 rounded-t-[26px]"
    >
      <ProfileInfo />
      <View className="w-full flex-1 bg-rose-300 rounded-t-[26px] mt-10">
        <View className="w-full   h-14  flex flex-row items-center justify-between px-16">
          <View onTouchEnd={() => setProfileState('upcoming')}>
            <Text className={classNames('text-lg', profileState === 'upcoming' ? 'font-bold' : null)}>Upcoming</Text>
          </View>
          <View  onTouchEnd={() => setProfileState('favorite')}>
            <Text className={classNames('text-lg', profileState === 'favorite' ? 'font-bold' : null)} >Favorite</Text>
          </View>
        </View>
        <View className=" flex-1 rounded-t-[26px] bg-transparent mt-33">
          {profileState === 'favorite' ?  <Favorite /> : <Upcoming />}
        </View>
      </View>

      <LinearGradient
        className="h-[130]  w-full bg-transparent absolute bottom-0 "
        colors={["transparent", "rgb(240, 240, 240)"]}
      />
    </View>
  );
};

export default Profile;
