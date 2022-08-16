import React from "react";
import Link from "next/link";

import { Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const Header = () => {
	return (
		<Flex
			// bgColor={"yellow"}
			shadow={"md"}
			w="full"
			justifyContent={"space-between"}
			// px={4}
			alignItems={"center"}
		>
			<Link href="/">
				<Text fontSize={18} fontWeight={"semibold"} p={6} cursor="pointer">
					Harisenin{" "}
					<Text as={"span"} fontWeight={"light"}>
						CaseStudy
					</Text>
				</Text>
			</Link>

			<Flex display={["none", "none", "flex"]}>
				<UnorderedList listStyleType={"none"} display="flex">
					<Link href="/product/all">
						<ListItem p={6} cursor={"pointer"}>
							Products
						</ListItem>
					</Link>
					<Link href="/category/all">
						<ListItem p={6} cursor={"pointer"}>
							Category
						</ListItem>
					</Link>
				</UnorderedList>
			</Flex>

			<Text fontWeight={"semibold"} p={6}>
				<a
					href="https://github.com/reinhaaard13"
					target={"_blank"}
					rel={"noreferrer"}
				>
					Reinhard Kevin
				</a>
			</Text>
		</Flex>
	);
};

export default Header;
