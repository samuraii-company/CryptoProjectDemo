import Head from "next/head";
import styles from "../styles/Home.module.scss"

import Hero from '../components/Homepage/Hero'
import Product from '../components/Homepage/Product'
import Features from '../components/Homepage/Features'
import BlockChainData from '../components/Homepage/BlockChainData'
import MoreReading from '../components/Homepage/MoreReading'
import BackedByTheBest from '../components/Homepage/BackedByTheBest'
import AdvisoryBoard from '../components/Homepage/AdvisoryBoard'

const Home = () => {
  return (
    <>
      <Head>
        <title>Alone LAB Project</title>
        <meta name="description" content="Alone Lab Project" />
        <meta name="keywords" content="Cryptocurrency, NFT, Tokens"></meta>
        <meta name="author" content="alone"></meta>
      </Head>
      <div className={styles.wrapper}>
        <Hero />
        <Product />
        <Features />
        <BlockChainData />
        <MoreReading />
        <BackedByTheBest />
        <AdvisoryBoard />
      </div>
    </>
  )
}

export default Home;