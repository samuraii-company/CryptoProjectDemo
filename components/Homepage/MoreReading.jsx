import styles from "../../styles/Homepage/MoreReading.module.scss"
import { BiPackage } from "react-icons/bi"
import { MdOutlineSecurity } from "react-icons/md"
import Link from "next/link"

const MoreReading = () => {
    return (
        <div className={styles.wrapper}>
            <h1>More reading</h1>
            <div className={styles.more}>
                <Link href="/airdrop">
                    <div className={styles.box}>
                        <div className={styles.icon}><BiPackage /></div>
                        <h2>Air Drop</h2>
                    </div>
                </Link>
                <Link href="/security">
                    <div className={styles.box}>
                        <div className={styles.icon}><MdOutlineSecurity /></div>
                        <h2>Security</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MoreReading