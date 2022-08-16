import React from "react";

import { Text, Flex, Button, useDisclosure, useToast } from "@chakra-ui/react";

import Header from "../../components/UI/Header";

import CategorySlider from "../../components/Category/CategorySlider";
import BoxContainer from "../../components/UI/BoxContainer";
import NewCategoryForm from "../../components/Category/NewCategoryForm";

const ProductPage = (props) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	const toast = useToast();

	const showToast = (message, type) => {
		toast({
			title: message,
			status: type,
			variant: "left-accent",
			isClosable: true,
			position: "top",
		});
	};

	return (
		<>
			<NewCategoryForm
				isOpen={isOpen}
				onClose={onClose}
				showToast={showToast}
			/>
			<Header />
			<BoxContainer display={"flex"} justifyContent={"space-between"}>
				<Text fontSize={32} fontWeight={"semibold"} mr={2}>
					Categories
				</Text>
				<Button onClick={onOpen}>Add New Category</Button>
			</BoxContainer>
			<CategorySlider />
		</>
	);
};

export default ProductPage;
