import React from "react";

import { Text, Flex } from "@chakra-ui/react";

import Header from "../../components/UI/Header";

import ProductList from "../../components/Product/ProductList";
import BoxContainer from "../../components/UI/BoxContainer";

const ProductPage = (props) => {
	return (
		<>
			<Header />
      <BoxContainer>
        <Text fontSize={32} fontWeight={'semibold'} mr={2}>All Products</Text>
      </BoxContainer>
			<ProductList />
		</>
	);
};

export default ProductPage;
