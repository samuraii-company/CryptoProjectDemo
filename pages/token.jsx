import Head from "next/head";

import Hero from "../components/Tokenpage/Hero";
import TokenFeatures from "../components/Tokenpage/TokenFeatures";
import SupplyDistribution from "../components/Tokenpage/SupplyDistribution";
import BackedByTheBest from "../components/Tokenpage/BackedByTheBest";

const TokenPage = () => {
    return (
        <>
            <Head>
                <title>About Token</title>
                <meta name="description" content="Alone Lab About Token" />
                <meta name="keywords" content="Cryptocurrency, NFT, Tokens"></meta>
                <meta name="author" content="alone"></meta>
            </Head>
            <div>
                <Hero />
                <TokenFeatures />
                <SupplyDistribution />
                <BackedByTheBest />
            </div>
        </>
    )
}

export default TokenPage