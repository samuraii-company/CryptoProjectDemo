import styles from "../../styles/Homepage/BackedByTheBest.module.scss"
import { sponsors } from "../../utils/sponsors"


const BackedByTheBest = () => {

    return (
        <div className={styles.wrapper}>
            <h1>Backed by the best</h1>
            <div className={styles.sponsors}>
                {sponsors && sponsors.map(({ id, image, name, company }) => (
                    <div className={styles.box} key={id}>
                        <img src={`/sponsors/${image}`} alt={name} />
                        <div className={styles.text}>
                            <h2>{name}</h2>
                            <p>{company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BackedByTheBest