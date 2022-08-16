import React from 'react'

import { Flex, Text } from '@chakra-ui/react';
import BoxContainer from './BoxContainer';

const HeroSection = () => {
  return (
    <BoxContainer height={"sm"} display="flex" flexDirection={'column'} justifyContent={'center'}>
      <Text fontSize={42} fontWeight={'semibold'}>Case Study Harisenin.com</Text>
      <Text fontSize={20} fontWeight={'normal'}>Reinhard Kevin Mustakim</Text>
    </BoxContainer>
  )
}

export default HeroSection