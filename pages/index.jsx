import Head from "next/head";

import Hero from '../components/Homepage/Hero'
import Product from '../components/Homepage/Product'
import Features from '../components/Homepage/Features'
import BlockChainData from '../components/Homepage/BlockChainData'
import MoreReading from '../components/Homepage/MoreReading'
import BackedByTheBest from '../components/Homepage/BackedByTheBest'
import AdvisoryBoard from '../components/Homepage/AdvisoryBoard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alone LAB Project</title>
        <meta name="description" content="Alone Lab Project" />
        <meta name="keywords" content="Cryptocurrency, NFT, Tokens"></meta>
        <meta name="author" content="alone"></meta>
      </Head>
      <Hero />
      <Product />
      <Features />
      <BlockChainData />
      <MoreReading />
      <BackedByTheBest />
      <AdvisoryBoard />
    </div>
  )
}
