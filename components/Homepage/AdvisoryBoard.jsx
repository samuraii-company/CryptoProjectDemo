import styles from "../../styles/Homepage/AdvisoryBoard.module.scss"
import { command } from "../../utils/command"

const AdvisoryBoard = () => {

    return (
        <div className={styles.wrapper}>
            <h1>Advisory board</h1>
            <div className={styles.onboard}>
                {command && command.map(({ id, name, position }) => (
                    <div className={styles.box} key={id}>
                        <h2>{name}</h2>
                        <p>{position}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdvisoryBoard