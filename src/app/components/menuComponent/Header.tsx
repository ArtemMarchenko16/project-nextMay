import React from 'react';
import styles from "../interface.module.css";
import Link from "next/link";
import UserInfo from "@/app/components/userComponent/UserInfo";
const Header = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>CineWawe</div>
            <div className={styles.menuItem}><Link className={styles.menuItem} href={"movies"}>Movies</Link></div>
            <div className={styles.menuItem}><Link className={styles.menuItem} href={"genres"}>Genres</Link></div>
            <UserInfo/>

        </aside>
    );
};
export default Header;