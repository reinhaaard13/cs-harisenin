import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { useSWRConfig } from "swr";

import { useFormik } from "formik";

import {
	Flex,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Select,
	Textarea,
} from "@chakra-ui/react";

const validate = (values) => {
	let errors = {};

	if (values.product_name.trim().length <= 0) {
		errors.product_name = "Product name is required";
	}

	if (values.product_slug.trim().length <= 0) {
		errors.product_slug = "Product slug is required";
	}

	if (+values.price < 0) {
		errors.price = "Price must be greater than 0";
	}

	if (values.description.trim().length <= 0) {
		errors.description = "Description is required";
	}

	return errors;
};

const NewProductForm = ({ isOpen, onClose, showToast }) => {
	const [categories, setCategories] = useState([]);
	const fileInputRef = useRef();
  const { mutate } = useSWRConfig()
	const formik = useFormik({
		initialValues: {
			category: "",
			product_name: "",
			product_slug: "",
			price: "",
			description: "",
			assets: "",
		},
		validate,
		onSubmit: async (values) => {
			formik.setSubmitting(true);
			const formData = new FormData();
			formData.append("category", values.category);
			formData.append("product_name", values.product_name);
			formData.append("product_slug", values.product_slug);
			formData.append("price", values.price);
			formData.append("description", values.description);
			[...values.assets].forEach((asset) => {
				formData.append("assets", asset);
			});

			console.log(formData)
			try {
				const response = await axios.post("/api/product", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});

				console.log(response);
				formik.setSubmitting(false);
				onClose();
				showToast("Product added successfully", "success");
				formik.resetForm();
        mutate("/api/product")
				fileInputRef.current.value = "";
			} catch (err) {
				formik.setSubmitting(false);
				showToast("Something went wrong", "error");
				console.log(err);
			}
		},
	});

	useEffect(() => {
		axios.get("/api/category").then((res) => {
			setCategories(
				res.data.map((category) => ({
					id: category.id,
					category_name: category.category_name,
				}))
			);
		});
	}, []);

	const pickImageHandler = (e) => {
		const files = e.target.files;
		if (files?.size > 10000000) {
			formik.setErrors({ assets: "Attachment size is too large" });
		} else if (!files) {
			formik.setFieldValue("assets", null);
		} else {
			formik.setFieldValue("assets", files);
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<form onSubmit={formik.handleSubmit}>
				<ModalContent>
					<ModalHeader>Create new Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb={2}>
							<FormLabel>Category</FormLabel>
							<Select
								value={formik.values.category}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								name={"category"}
								placeholder={"Pick Category"}
							>
								{categories.map((category, idx) => (
									<option value={category.id} key={idx}>
										{category.category_name}
									</option>
								))}
							</Select>
						</FormControl>

						<FormControl mb={2}>
							<FormLabel>Product Name</FormLabel>
							<Input
								type="text"
								name="product_name"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.product_name}
							/>
						</FormControl>

						<FormControl mb={2}>
							<FormLabel>Product Slug</FormLabel>
							<Input
								type="text"
								name="product_slug"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.product_slug}
							/>
						</FormControl>

						<FormControl mb={2}>
							<FormLabel>Price</FormLabel>
							<Input
								type="number"
								name="price"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.price}
							/>
						</FormControl>

						<FormControl mb={2}>
							<FormLabel>Description</FormLabel>
							<Textarea
								name="description"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.description}
							/>
						</FormControl>

						<FormControl mb={2}>
							<FormLabel>Assets</FormLabel>
							<input
								type="file"
								name="assets"
								onChange={pickImageHandler}
								ref={fileInputRef}
                accept="image/*"
								multiple
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button variant="ghost" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button
							colorScheme="blue"
							type="submit"
							isLoading={formik.isSubmitting}
						>
							Create Product
						</Button>
					</ModalFooter>
				</ModalContent>
			</form>
		</Modal>
	);
};

export default NewProductForm;
