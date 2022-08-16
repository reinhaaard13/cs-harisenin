import Link from "next/link"
import {
  Flex,
  Text,
  Box
} from "@chakra-ui/react"
import Header from '../components/UI/Header'
import CategoryCover from '../components/Category/CategoryCover'
import BoxContainer from '../components/UI/BoxContainer'
import HeroSection from '../components/UI/HeroSection'
import ProductList from '../components/Product/ProductList'
import CategorySlider from '../components/Category/CategorySlider'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection /> 
      <BoxContainer display={'flex'} alignItems={'baseline'}>
        <Text fontSize={20} fontWeight={'semibold'} mr={2}>Categories</Text>
        <Link href={'/category/all'}>See all</Link>
      </BoxContainer>
      <CategorySlider />
      <BoxContainer display={'flex'} alignItems={'baseline'}>
        <Text fontSize={20} fontWeight={'semibold'} mr={2}>List of All Available Products</Text>
        <Link href={'/product/all'}>See all</Link>
      </BoxContainer>
      <ProductList />
    </>
  )
}
