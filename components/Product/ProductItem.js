import React from "react";
import Link from "next/link";

import Image from "next/image";

import { Flex, Text, Box } from "@chakra-ui/react";

const ProductItem = ({ product }) => {
	return (
		<Link href={`/product/${product.id}`}>
			<Flex
				flexDir={"column"}
				borderWidth={1}
				borderColor={"gray.300"}
				rounded="md"
				overflow={"clip"}
				cursor={'pointer'}
				transition={"all 0.2s ease-in-out"}
				_hover={{shadow: "md"}}
			>
				<Box bgColor={"gray.300"} w={"full"} h={"32"}>
					<Box position={"relative"} w={"full"} h={"full"}>
						<Image
							src={product.Assets[0].path}
							alt="cover"
							layout="fill"
							objectFit="cover"
						/>
					</Box>
				</Box>
				<Box p={4}>
					<Text fontSize={18} fontWeight={"semibold"}>
						{product.product_name}
					</Text>
					<Text fontSize={14} fontWeight={"light"}>
						{product.product_slug}
					</Text>
				</Box>
			</Flex>
		</Link>
	);
};

export default ProductItem;
