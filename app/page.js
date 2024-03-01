import Head from "next/head";
import Image from "next/image";
import styles from "../app/styles.module.css";

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <h1>Movies App</h1>
        </Head>
        
      </div>
  );
}
