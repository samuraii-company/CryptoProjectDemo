import styles from "../../styles/Homepage/Features.module.scss"
import { AiOutlineReload } from "react-icons/ai"
import { BiWallet } from "react-icons/bi"
import { BiTime } from "react-icons/bi"

const Features = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.info_block}>
                    <h1>Speed suitable for mempools</h1>
                    <h2>Our state of the art technological stack allows to analyse blockchains and their transactions in matter of microseconds allowing for truly real-time blockchain data</h2>
                </div>
                <div className={styles.info_block}>
                    <h1>Etherium analytics and more</h1>
                    <h2>Whalemap is going to be one of the first providers of analysed Solana data on the market where Solana is not the final stop</h2>
                </div>
                <div className={styles.info_block}>
                    <h1>DeFi protocol analytics</h1>
                    <h2>Gain insight into DeFi tokens’ true value based on underlying fundamentals of their smart contracts</h2>
                </div>
            </div>
            <div className={styles.features}>
                <div className={styles.box}>
                    <div className={styles.icon}><BiTime /></div>
                    <h1>Super realtime</h1>
                </div>
                <div className={styles.box}>
                    <div className={styles.icon}><BiWallet /></div>
                    <h1>Labeled wallets</h1>
                </div>
                <div className={styles.box}>
                    <div className={styles.icon}><AiOutlineReload /></div>
                    <h1>DEX integration</h1>
                </div>
            </div>
        </div>
    )
}

export default Features