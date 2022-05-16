import styles from "../../styles/Roadmappage/Roadmap.module.scss"
import Link from "next/link"

import { roadmapdata } from "../../utils/roadmapdata"

const Roadmap = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Complete RoadMap</h1>
            <div className={styles.text_wrapper}>
                <h3>For Buying token</h3>
                <Link href="/price"><button>Buy Token</button></Link>
            </div>
            <div className={styles.roadmap_wrapper}>
                {roadmapdata && roadmapdata.map(({ id, stage, description }) => (
                    <div className={styles.box} key={id}>
                        <h1>Stage-{stage}</h1>
                        <h2>{description}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Roadmap