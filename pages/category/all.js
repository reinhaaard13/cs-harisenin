import React from "react";

import { Text, Flex } from "@chakra-ui/react";

import Header from "../../components/UI/Header";

import CategorySlider from "../../components/Category/CategorySlider";
import BoxContainer from "../../components/UI/BoxContainer";

const ProductPage = (props) => {
	return (
		<>
			<Header />
      <BoxContainer>
        <Text fontSize={32} fontWeight={'semibold'} mr={2}>Categories</Text>
      </BoxContainer>
			<CategorySlider />
		</>
	);
};

export default ProductPage;
