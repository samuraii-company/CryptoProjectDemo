import styles from "../../styles/Homepage/Hero.module.scss"
import Link from "next/link"

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Democratising data using blockchains</h1>
            <h2>Whalemap’s analytics tools provide users with precise, actionable and timely blockchain data.</h2>
            <div className={styles.buttons_wrapper}>
                <Link href="/roadmap"><button>RoadMap</button></Link>
                <Link href="/ico"><button>Buy Tokens</button></Link>
            </div>
        </div>
    )
}

export default Hero