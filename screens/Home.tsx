import { View, Text } from 'react-native'
import React from 'react'
import TopBar from '../components/TopBar'
import Profile from '../components/Profile'

type Props = {}

const Home = (props: Props) => {
  return (
    <View className='flex-1'>
      <TopBar height={80} />
      <Profile />
    </View>
  )
}

export default Home