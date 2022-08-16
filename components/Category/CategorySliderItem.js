import React from "react";
import Link from "next/link";

import Image from "next/image";

import { Flex, Text, Box } from "@chakra-ui/react";

const CategorySliderItem = ({ category }) => {
	return (
		<Box
			h={32}
			w={80}
			maxW={"1200px"}
			bg="gray.300"
			rounded={"xl"}
			overflow={"hidden"}
			display={"inline-block"}
			mr={2}
			cursor={"pointer"}
			transition={"all"}
			transitionDuration={"0.2s"}
			_hover={{ shadow: "lg" }}
		>
			<Link href={`/category/${category.id}`}>
				<Box position={"relative"} w={"full"} h={"full"}>
					<Image
						src={category.Asset.path}
						alt="cover"
						layout="fill"
						objectFit="cover"
					/>
					<Text
						position={"absolute"}
						bottom={4}
						left={8}
						fontSize={20}
						fontWeight={"semibold"}
						textColor={"white"}
						textShadow={"base"}
					>
						{category.category_name}
					</Text>
				</Box>
			</Link>
		</Box>
	);
};

export default CategorySliderItem;
