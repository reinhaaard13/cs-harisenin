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

	if (values.category_name.trim().length <= 0) {
		errors.category_name = "Category name is required";
	}

	if (values.category_slug.trim().length <= 0) {
		errors.category_slug = "Category slug is required";
	}

	return errors;
};

const NewCategoryForm = ({ isOpen, onClose, showToast }) => {
	const fileInputRef = useRef();
  const { mutate } = useSWRConfig()
	const formik = useFormik({
		initialValues: {
			category_name: "",
			category_slug: "",
			assets: "",
		},
		validate,
		onSubmit: async (values) => {
			formik.setSubmitting(true);
			const formData = new FormData();
			formData.append("category_name", values.category_name);
			formData.append("category_slug", values.category_slug);
			[...values.assets].forEach((asset) => {
				formData.append("assets", asset);
			});

			try {
				const response = await axios.post("/api/category", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});

				console.log(response);
				formik.setSubmitting(false);
				onClose();
				showToast("Product added successfully", "success");
				formik.resetForm();
        mutate("/api/category")
				fileInputRef.current.value = "";
			} catch (err) {
				formik.setSubmitting(false);
				showToast("Something went wrong", "error");
				console.log(err);
			}
		},
	});
	
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
					<ModalHeader>Create new Category</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl mb={2}>
							<FormLabel>Category Name</FormLabel>
							<Input
								type="text"
								name="category_name"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.category_name}
							/>
						</FormControl>

						<FormControl mb={2}>
							<FormLabel>Category Slug</FormLabel>
							<Input
								type="text"
								name="category_slug"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.category_slug}
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

export default NewCategoryForm;
