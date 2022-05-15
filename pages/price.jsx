import Head from "next/head";
import styles from "../styles/Price.module.scss"
import PriceList from "../components/Pricing/PriceList";

const PricePage = () => {
    return (
        <>
            <Head>
                <title>Pricing</title>
                <meta name="description" content="Alone Lab Pricing" />
                <meta name="keywords" content="Cryptocurrency, NFT, Tokens"></meta>
                <meta name="author" content="alone"></meta>
            </Head>
            <div className={styles.wrapper}>
                <PriceList />
            </div>
        </>
    )
}

export default PricePage