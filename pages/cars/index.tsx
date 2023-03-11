import { domain } from "@/config";
import type { ICarsRes } from "../api/cars";
import { useRouter } from "next/router";
import styles from './index.module.css';
import Head from "next/head";

export default function Cars({ carNames }: ICarsRes) {
  const router = useRouter();

  const handleJump = (carName: string) => {
    router.push(`/cars/${carName}`);
  };

  return (
    <div className={styles.cars}>
      <Head>
        <title>Cars</title>
      </Head>
      <h1 className={styles.title}>Cars</h1>
      <ul className={styles.carList}>
        {carNames.map(carName => (
          <li className={styles.carItem} key={carName} onClick={() => handleJump(carName)}>
            {carName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${domain}/api/cars`);
  const data: ICarsRes = await res.json();

  return {
    props: data
  };
}
