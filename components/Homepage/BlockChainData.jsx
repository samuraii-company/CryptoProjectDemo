import styles from "../../styles/Homepage/BlockChainData.module.scss"


const BlockChainData = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.text_wrapper}>
                        <h1>Making blockchain data accessible</h1>
                        <h2>Blockchain data is hard to query, index and analyse. It requires significant engineering and hardware resources. Whalemap takes on this hard job so others don’t have to develop proprietary solutions for on-chain analytics. Leveraging blockchains to make that data accessible is the next step.</h2>
                    </div>
                </div>
                <div className={styles.text_wrapper}>
                    <h1>Supported networks</h1>
                    <h2>In legacy markets, institutions have access to resources that are unavailable to the general public. But with the advent of the blockchain, financial data should no longer just be available to a select few. We at Whalemap believe that this data belongs to everyone, not just a handful of large institutions.</h2>
                </div>
            </div>
            <div className={styles.icons}>
                <img src="/icons/btc.png" alt="btc" />
                <img src="/icons/sol.png" alt="solana" />
                <img src="/icons/litecoin.png" alt="" />
                <img src="/icons/dash.png" alt="" />
                <img src="/icons/eth.png" alt="" />
                <img src="/icons/matic.png" alt="" />
            </div>
        </>
    )
}

export default BlockChainData