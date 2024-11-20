import React from 'react';
import styles from "./Menu.module.css";
import Link from "next/link";
import UserInfo from "./UserInfo";
const Header = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>CineWawe</div>
            <div className={styles.menuItem}><Link className={styles.menuItem} href={"movies"}>Movies</Link></div>
            <div className={styles.menuItem}><Link className={styles.menuItem} href={"genre"}>Genres</Link></div>
            <UserInfo/>

        </aside>
    );
};
export default Header;