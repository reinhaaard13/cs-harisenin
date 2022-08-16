import React, { useRef } from "react";
import Image from "next/image";
import axios from "axios";
import useSWR from "swr";

import { Flex, Text, Box, IconButton } from "@chakra-ui/react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import BoxContainer from "../UI/BoxContainer";
import CategorySliderItem from "./CategorySliderItem";

const CategorySlider = () => {
	const scrollRef = useRef();
	const { data } = useSWR("/api/category", (url) =>
		axios.get(url).then((res) => res.data)
	);

	const scroll = (offset) => {
		scrollRef.current.scrollLeft += offset;
	};

	return (
		<>
			{data ? (
				<BoxContainer position={"relative"} className={"group"}>
					<Box
						whiteSpace="nowrap"
						overflowX="scroll"
						// overflow={"hidden"}
						sx={{
							"&::-webkit-scrollbar": {
								display: "none",
							},
						}}
						ref={scrollRef}
						scrollBehavior={"smooth"}
					>
						{data?.map((category, index) => (
							<CategorySliderItem key={index} category={category} />
						))}
					</Box>
					<IconButton
						icon={<IoChevronBack />}
						onClick={() => {
							scroll(-200);
						}}
						top={"30%"}
						size={"sm"}
						colorScheme={"gray"}
						shadow={"lg"}
						left={5}
						position={"absolute"}
						opacity={0}
						transform={"translateY(20px)"}
						_groupHover={{ opacity: 1, transform: "translateY(0)" }}
					/>
					<IconButton
						icon={<IoChevronForward />}
						onClick={() => {
							scroll(200);
						}}
						top={"30%"}
						size={"sm"}
						shadow={"lg"}
						colorScheme={"gray"}
						right={5}
						position={"absolute"}
						opacity={0}
						transform={"translateY(20px)"}
						_groupHover={{ opacity: 1, transform: "translateY(0)" }}
					/>
				</BoxContainer>
			) : (
				<BoxContainer
					position={"relative"}
					height={24}
					display={"flex"}
					justifyContent="center"
					alignItems="center"
				>
					<Text>No Category Found</Text>
				</BoxContainer>
			)}
		</>
	);
};

export default CategorySlider;
