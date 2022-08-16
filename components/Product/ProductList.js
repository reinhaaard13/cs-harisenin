import React from 'react'
import axios from "axios"

import {
  Flex,
  Text,
  SimpleGrid 
} from "@chakra-ui/react"

import useSWR from 'swr'

import ProductItem from './ProductItem'

const ProductList = () => {
  const { data } = useSWR("/api/product", (url) => axios.get(url).then(res => res.data))

  return (
    <SimpleGrid
      w="95%"
      maxW="1200px"
      mx={'auto'}
      mt={4}
      columns={[1, 2, 4]}
      spacing={4}
    >
      {data?.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </SimpleGrid>
  )
}

export default ProductList