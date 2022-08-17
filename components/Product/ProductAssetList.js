import React, { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

import { HiPlus } from "react-icons/hi";

import { Flex, Text, SimpleGrid, Box, IconButton, Spinner } from "@chakra-ui/react";
import BoxContainer from "../UI/BoxContainer";
import NewProductAsset from "./NewProductAsset";

const ProductAssetList = ({ product }) => {
	const [lightboxController, setLightBoxController] = useState({
		toggler: false,
		sourceIndex: 0,
	})

	const openLightboxOnIndex = (idx) => {
		setLightBoxController(prevState => ({
			toggler: !prevState.toggler,
			sourceIndex: idx,
		}))
	}

	console.log(lightboxController)

	return (
		<>
		<FsLightbox
			toggler={lightboxController.toggler}
			sources={
				product?.Assets.map((asset) => (asset.path))
			}
			sourceIndex={lightboxController.sourceIndex}
		/>
		<BoxContainer>
			<SimpleGrid columns={[1, 2, 4]} spacing={4}>
				{product &&
					product?.Assets.map((asset, idx) => (
						<Box
							key={idx}
							position={"relative"}
							w={"full"}
							h={36}
							rounded={"md"}
							backgroundColor={"gray.300"}
							overflow={"clip"}
							cursor={"pointer"}
							onClick={() => {openLightboxOnIndex(idx)}}
						>
							<Image
								src={asset.path}
								alt={asset.name}
								layout="fill"
								objectFit="cover"
							/>
						</Box>
					))}
				{!product && (
					<Flex
						w="full"
						h={36}
						alignItems={"center"}
						justifyContent={"center"}
						backgroundColor={"gray.50"}
					>
						<Spinner />
						<Text ml={2}>Loading</Text>
					</Flex>
				)}
				<NewProductAsset product={product} />
			</SimpleGrid>
		</BoxContainer>
		</>
	);
};

export default ProductAssetList;
