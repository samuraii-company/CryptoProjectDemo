import styles from "../styles/Footer.module.scss"
import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h1 className={styles.logo}>Alone</h1>
            <div className={styles.navbar}>
                <Link href="/about">Company</Link>
                <Link href="/terms">Terms and conditions</Link>
                <Link href="/privacy">Privacy policy</Link>
                <a href="https://t.me/Samuraiii143">Contact Us</a>
            </div>
            <div className={styles.icons}>
                <a href="https://github.com/samuraii-company?tab=repositories"><AiFillGithub /></a>
                <a href="https://t.me/Samuraiii143"><FaTelegram /></a>
            </div>
        </div>
    )
}

export default Footer