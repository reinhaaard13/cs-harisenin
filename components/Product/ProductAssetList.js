import React from "react";
import Image from "next/image";

import { HiPlus } from "react-icons/hi";

import { Flex, Text, SimpleGrid, Box, IconButton, Spinner } from "@chakra-ui/react";
import BoxContainer from "../UI/BoxContainer";
import NewProductAsset from "./NewProductAsset";

const ProductAssetList = ({ product }) => {
	return (
		<BoxContainer>
			<SimpleGrid columns={[1, 2, 4]} spacing={4}>
				{product &&
					product?.Assets.map((asset, idx) => (
						<Box
							key={idx}
							position={"relative"}
							w={"full"}
							h={36}
							rounded={"md"}
							backgroundColor={"gray.300"}
							overflow={"clip"}
						>
							<Image
								src={asset.path}
								alt={asset.name}
								layout="fill"
								objectFit="cover"
							/>
						</Box>
					))}
				{!product && (
					<Flex
						w="full"
						h={36}
						alignItems={"center"}
						justifyContent={"center"}
						backgroundColor={"gray.50"}
					>
						<Spinner />
						<Text ml={2}>Loading</Text>
					</Flex>
				)}
				<NewProductAsset product={product} />
			</SimpleGrid>
		</BoxContainer>
	);
};

export default ProductAssetList;
