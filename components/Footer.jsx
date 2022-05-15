import styles from "../styles/Footer.module.scss"
import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h1 className={styles.logo}>Alone</h1>
            <div className={styles.navbar}>
                <Link href="/">Company</Link>
                <Link href="/">Terms and conditions</Link>
                <Link href="/">Privacy policy</Link>
                <Link href="/">Contact Us</Link>
            </div>
            <div className={styles.icons}>
                <a href="/"><AiFillGithub /></a>
                <a href="/"><FaTelegram /></a>
            </div>
        </div>
    )
}

export default Footer