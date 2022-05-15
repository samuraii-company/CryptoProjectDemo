import styles from "../../styles/Tokenpage/SupplyDistribution.module.scss"


const SupplyDistribution = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text_wrapper}>
                <h1>WMP Emission schedule</h1>
                <h2>A 3-stage airdrop making up 20% of total circulating supply and a multi-stage liquidity mining program</h2>
                <h2>79% are linearly vested long-term including cliffs for team and advisory allocations and a 1% public sale</h2>
            </div>
            <img src="/tokens/emission.png" alt="emission" />
            <h1 className={styles.supply_text}>WMP Supply distribution</h1>
            <img src="/tokens/distribution.png" alt="distribution" />
        </div>
    )
}

export default SupplyDistribution