import styles from "../../styles/Tokenpage/BackedByTheBest.module.scss"
import { tokens_backed } from "../../utils/token_backed"


const BackedByTheBest = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Token Features</h1>
            <div className={styles.items_wrapper}>
                {tokens_backed && tokens_backed.map(({ id, image, title, description }) => (
                    <div className={styles.item} key={id}>
                        <div className={styles.text}>
                            <h1>{title}</h1>
                            <h2>{description}</h2>
                        </div>
                        <img src={`icons/${image}`} alt={image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BackedByTheBest