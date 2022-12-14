import React from "react";
import Image from "next/image";

import { Flex, Text, Box } from "@chakra-ui/react";

const CategoryCover = ({ category }) => {
	return (
		<Flex width={"full"} marginTop={8} justifyContent={"center"}>
			<Box
				h={60}
				w={"95%"}
				maxW={"1200px"}
				bg="gray.300"
				rounded={"xl"}
				overflow={"clip"}
			>
				<Box position={"relative"} w={"full"} h={"full"}>
					<Image
						src={category.Asset.path}
						alt="cover"
						layout="fill"
						objectFit="cover"
					/>
					<Box position={"absolute"} bottom={4} left={8}>
						<Text
							fontSize={32}
							fontWeight={"semibold"}
							textColor={"white"}
							textShadow={"base"}
						>
							{category.category_name}
						</Text>
						<Box
							px={2}
							rounded={"md"}
							backgroundColor={"whiteAlpha.500"}
							width={"fit-content"}
							backdropFilter={"auto"}
							backdropBlur={"md"}
						>
							<Text fontWeight={"500"} fontSize={"sm"}>
								{category.category_slug}
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Flex>
	);
};

export default CategoryCover;
