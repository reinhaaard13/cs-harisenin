import React from 'react'

import {
  Flex,
  Text,
  SimpleGrid 
} from "@chakra-ui/react"
import ProductItem from '../Product/ProductItem'

const CategoryProductList = ({products}) => {
  return (
    <SimpleGrid
      w="95%"
      maxW="1200px"
      mx={'auto'}
      mt={4}
      columns={[1, 2, 4]}
      spacing={4}
    >
      {products?.map((product, idx) => (
        <ProductItem key={idx} product={product} />
      ))}
    </SimpleGrid>
  )
}

export default CategoryProductList