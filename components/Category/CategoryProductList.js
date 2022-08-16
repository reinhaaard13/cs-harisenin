import React from 'react'

import {
  Flex,
  Text,
  SimpleGrid 
} from "@chakra-ui/react"
import CategoryProductItem from './CategoryProductItem'

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
        <CategoryProductItem key={idx} product={product} />
      ))}
    </SimpleGrid>
  )
}

export default CategoryProductList