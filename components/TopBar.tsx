import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import classNames from 'classnames';
import { AngleLeftIcon, ThreeDotVerticalIcon } from './svgs';

type Props = {
    height: number;
}

const TopBar = ({height}: Props) => {
    const {width} = Dimensions.get('window')
  return (
    <View style={{height, width}} className={classNames(' flex justify-center ')}>
      <View style={{width}} className='h-10 bg-transparent flex flex-row justify-between px-5 items-center'>
        <AngleLeftIcon classStyle='fill-white w-[25] h-[25]' />
        <ThreeDotVerticalIcon classStyle='fill-white w-[25] h-[25]' />
      </View>
    </View>
  )
}

export default TopBar