import React from "react";
import Image from "next/image";

import { Flex, Text, Box } from "@chakra-ui/react";

const CategoryCover = ({category}) => {
	return (
		<Flex width={"full"} marginTop={8} justifyContent={"center"}>
			<Box
				h={60}
				w={"95%"}
        maxW={"1200px"}
				bg="yellow"
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
					<Text
						position={"absolute"}
						bottom={4}
						left={8}
						fontSize={32}
						fontWeight={"semibold"}
            textColor={'white'}
            textShadow={'base'}
					>
						{category.category_name}
					</Text>
				</Box>
			</Box>
		</Flex>
	);
};

export default CategoryCover;
