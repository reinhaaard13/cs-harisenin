import React from "react";

import { Text, Flex, Button, useDisclosure, useToast } from "@chakra-ui/react";

import Header from "../../components/UI/Header";

import ProductList from "../../components/Product/ProductList";
import BoxContainer from "../../components/UI/BoxContainer";
import NewProductForm from "../../components/Product/NewProductForm";

const ProductPage = (props) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	const toast = useToast()

	const showToast = (message, type) => {
		toast({
			title: message,
			status: type,
			variant: "left-accent",
			isClosable: true,
			position: "top"
		})
	}

	return (
		<>
			<NewProductForm isOpen={isOpen} onClose={onClose} showToast={showToast} />
			<Header />
			<BoxContainer display={"flex"} justifyContent={"space-between"}>
				<Text fontSize={32} fontWeight={"semibold"} mr={2}>
					All Products
				</Text>
				<Button onClick={onOpen}>Add New Product</Button>
			</BoxContainer>
			<ProductList />
		</>
	);
};

export default ProductPage;
