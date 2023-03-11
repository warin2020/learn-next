import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>Welcome!</h1>
      <h2>This is a Car themed app built by Next</h2>
    </div>
  );
}
