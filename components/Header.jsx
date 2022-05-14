import React from "react";
import styles from "../styles/Header.module.scss"
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

import Link from "next/link";

const Header = () => {
    const [burgerMenu, setBurgerMenu] = React.useState(false);
    return (
        <div className={styles.header}>
            <h1 className={styles.logo}>Alone</h1>
            <div className={styles.navbar}>
                <Link href="/">Dashboard</Link>
                <Link href="/token">Token</Link>
                <Link href="/roadmap">RoadMap</Link>
                <Link href="/price">Pricing</Link>
                <Link href="/docs">Docs</Link>
            </div>
            <div className={styles.icons}>
                <a href="/"><AiFillGithub /></a>
                <a href="/"><FaTelegram /></a>
            </div>
        </div>
    )
}

export default Header