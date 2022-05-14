import styles from "../../styles/Homepage/Product.module.scss"
import Link from "next/link"

const Product = () => {
    return (
        <div className={styles.wrapper}>
            <img src="/product.png" alt="product-image" />
            <div className={styles.info}>
                <h1>A comprehensive analytics solution</h1>
                <h2>We are building an infrastructure to provide an easy-to-use platform for users to track data on various blockchains, including Solana, Ethereum, and Polygon</h2>
                <Link href="/docs"><button>Learn More</button></Link>
            </div>
        </div>
    )
}

export default Product