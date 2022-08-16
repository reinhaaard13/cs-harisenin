import React from 'react'

import {
  Box
} from "@chakra-ui/react"

const BoxContainer = ({children, ...styles}) => {
  return (
    <Box
      w="95%"
      maxW="1200px"
      mx="auto"
      mt={4}
      {...styles}
    >
      {children}
    </Box>
  )
}

export default BoxContainer