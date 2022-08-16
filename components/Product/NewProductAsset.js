import React, { useFormik, useRef, useState } from "react";
import FormData from "form-data";
import axios from "axios";

import { HiPlus } from "react-icons/hi";

import {
	Flex,
	Text,
	Box,
	IconButton,
	Input,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
import { mutate } from "swr";

const NewProductAsset = ({ product }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isLoading, setIsLoading] = useState(false);
	const fileInputRef = useRef();
	const cancelRef = useRef();

	const pickFileHandler = (e) => {
		fileInputRef.current.click();
	};

	const promptHandler = () => {
		if (fileInputRef.current.files.length > 0) {
			onOpen();
		}
	};

	const submitHandler = async () => {
		setIsLoading(true);
		const formData = new FormData();
		formData.append("id", product.id);
		let assets = [...fileInputRef.current.files];
		console.log([...fileInputRef.current.files]);
		assets.forEach((asset) => {
			formData.append("assets", asset);
		});
		// formData.append("assets", assets[0]);

		try {
			const response = await axios.post(
				`/api/product/${product.id}/attachment`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			console.log(response);
			mutate(`/api/product/${product.id}`);
		} catch (err) {
			console.log(err);
		}
		setIsLoading(false);
		onClose();
	};

	return (
		<>
			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Add New Asset
						</AlertDialogHeader>

						<AlertDialogBody>
							Add this new asset to the product?
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme="teal"
								onClick={submitHandler}
								ml={3}
								isLoading={isLoading}
							>
								Add
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
			<Flex
				w="full"
				h={36}
				alignItems={"center"}
				justifyContent={"center"}
				backgroundColor={"gray.50"}
				borderWidth={1}
				borderRadius={"md"}
				borderColor={"gray.300"}
			>
				<Input
					type="file"
					name="asset"
					ref={fileInputRef}
					id="asset"
					display={"none"}
					onChange={promptHandler}
					multiple
					accept="image/*"
				/>
				<Button onClick={pickFileHandler} leftIcon={<HiPlus />}>Add New</Button>
			</Flex>
		</>
	);
};

export default NewProductAsset;
