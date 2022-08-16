import axios from "axios"

import { Flex, Text, Box } from "@chakra-ui/react";
import Header from "../../components/UI/Header";
import CategoryCover from "../../components/Category/CategoryCover";
import CategoryProductList from "../../components/Category/CategoryProductList";
import BoxContainer from "../../components/UI/BoxContainer";

export default function CategoryScreen(props) {
	

	return (
		<>
			<Header />
			<CategoryCover category={props.category} />
			<BoxContainer>
				<Text fontSize={20} fontWeight={"semibold"}>
					List of Products
				</Text>
			</BoxContainer>
			<CategoryProductList products={props.category?.Products} />
		</>
	);
}

export async function getServerSideProps(context) {
	const { category_id } = context.query;
	const category = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/${category_id}`);
	// console.log(category);
	return {
		props: {
			category: category.data,
		},
	}
}
