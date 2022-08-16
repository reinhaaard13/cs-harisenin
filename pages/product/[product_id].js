import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

import { Flex, Text, Box } from "@chakra-ui/react";
import Header from "../../components/UI/Header";
import BoxContainer from "../../components/UI/BoxContainer";
import ProductCover from "../../components/Product/ProductCover";
import ProductAssetList from "../../components/Product/ProductAssetList";

export default function ProductScreen(props) {
	const router = useRouter()
	const { product_id } = router.query

	const { data } = useSWR(`/api/product/${product_id}`, (url) => (
		axios.get(url).then((res) => res.data)
	));

	return (
		<>
			<Header />
      <ProductCover product={data} />
			<BoxContainer position={'relative'}>
				<Text fontSize={32} fontWeight={"semibold"}>
					Gallery
				</Text>
			</BoxContainer>
      <ProductAssetList product={data}/>
		</>
	);
}
