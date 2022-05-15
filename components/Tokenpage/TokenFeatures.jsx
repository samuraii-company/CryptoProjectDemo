import styles from "../../styles/Tokenpage/TokenFeatures.module.scss"

const TokenFeatures = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text_wrapper}>
                <h1>Alone Token Summary</h1>
                <h2>WMP and xWMP are designed with the following principles in mind</h2>
            </div>
            <div className={styles.features_wrapper}>
                <div className={styles.box}>
                    <img src="/tokens/1.png" alt="" />
                    <h2>Accrue value through utility, not hyperinflation</h2>
                </div>
                <div className={styles.box}>
                    <img src="/tokens/2.png" alt="" />
                    <h2>Fuel Whalemap’s ecosystem of utility through a secondary token (xWMP)</h2>
                </div>
                <div className={styles.box}>
                    <img src="/tokens/3.png" alt="" />
                    <h2>A new take on token utility in the analytics space</h2>
                </div>
                <div className={styles.box}>
                    <img src="/tokens/4.png" alt="" />
                    <h2>Key supporters get rewarded as Whalemap’s use grows</h2>
                </div>
                <div className={styles.box}>
                    <img src="/tokens/5.png" alt="" />
                    <h2>Long-term lockups that are only meant for long-term believers</h2>
                </div>
                <div className={styles.box}>
                    <img src="/tokens/6.png" alt="" />
                    <h2>Specialised governance power over Whalemap for core believers</h2>
                </div>
            </div>
        </div>
    )
}

export default TokenFeatures