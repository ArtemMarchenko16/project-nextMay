import React from 'react';
import styles from "../interface.module.css";

const UserInfo = () => {
    return (
        <div className={styles.settingsForUser}>
            <a className={` ${styles.account}`}>K</a>
            <a className={`${styles.nickname}`}>kokos401</a>
        </div>
    );
};

export default UserInfo;