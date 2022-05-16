import styles from "../../styles/Roadmappage/Hero.module.scss"

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text_wrapper}>
                <h1>Alone roadmap! Here is our Complete services</h1>
                <h2>Airdrop to Whalemap’s loyal users that have joined its journey over the past year</h2>
                <button>Learn More</button>
            </div>
            <img src="/roadmap/roadmap.png" alt="roadmap" />
        </div>
    )
}

export default Hero