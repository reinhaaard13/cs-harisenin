import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import { Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const Header = () => {
	const router = useRouter();

	return (
		<Flex
			shadow={"md"}
			w="full"
			justifyContent={"space-between"}
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
						<ListItem
							p={6}
							cursor={"pointer"}
							fontWeight={router.asPath.includes("/product") && "800"}
							borderBottom={router.asPath.includes("/product") && "4px solid black"}
							_hover={{ backgroundColor: "#eee" }}
						>
							Products
						</ListItem>
					</Link>
					<Link href="/category/all">
						<ListItem
							p={6}
							cursor={"pointer"}
							fontWeight={router.asPath.includes("/category") && "800"}
							borderBottom={router.asPath.includes("/category") && "4px solid black"}
							_hover={{ backgroundColor: "#eee" }}
						>
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
