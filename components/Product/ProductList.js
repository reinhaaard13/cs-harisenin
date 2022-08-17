import React from "react";
import axios from "axios";

import { Flex, Text, SimpleGrid, Spinner } from "@chakra-ui/react";

import useSWR from "swr";

import ProductItem from "./ProductItem";
import BoxContainer from "../UI/BoxContainer";

const ProductList = () => {
	const { data } = useSWR("/api/product", (url) =>
		axios.get(url).then((res) => res.data)
	);

  if (!data) {
		return (
			<BoxContainer
				position={"relative"}
				height={24}
				display={"flex"}
				justifyContent="center"
				alignItems="center"
			>
				<Spinner />
				<Text ml={4}>Loading</Text>
			</BoxContainer>
		);
	}

	return (
		<>
			{data.length > 0 ? (
				<SimpleGrid
					w="95%"
					maxW="1200px"
					mx={"auto"}
					mt={4}
					columns={[1, 2, 4]}
					spacing={4}
				>
					{data?.map((product, index) => (
						<ProductItem key={index} product={product} />
					))}
				</SimpleGrid>
			) : (
				<BoxContainer
					position={"relative"}
					height={24}
					display={"flex"}
					justifyContent="center"
					alignItems="center"
				>
					<Text>No Product Found</Text>
				</BoxContainer>
			)}
		</>
	);
};

export default ProductList;
