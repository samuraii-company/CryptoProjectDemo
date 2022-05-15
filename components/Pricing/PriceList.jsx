import styles from "../../styles/Pricing/PriceList.module.scss"
import Link from "next/link"
import { plans } from "../../utils/plans"


const PriceList = () => {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Pricing</h1>
            <div className={styles.box_wrapper}>
                {plans && plans.map(({ id, title, description, price, path }) => (
                    <div className={styles.box} key={id}>
                        <h1>{title} Plan</h1>
                        <h2>{description}</h2>
                        <span>${`${price}`}</span>
                        <p>Per Month</p>
                        <Link href={`/buy/${path}`}><button>Buy {title}</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PriceList