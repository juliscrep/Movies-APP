import React from 'react';
import Head from 'next/head';
import styles from "../app/styles.module.css";

const about = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>About Us</title>
            <h1>About</h1>
        </Head>
    </div>
  )
}

export default about