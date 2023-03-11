import { domain } from "@/config";
import type { ICarRes } from "../../api/cars/[name]";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Car({ car }: ICarRes) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return car !== undefined ? (
    <div className={styles.car}>
      <Head>
        <title>{car.name}</title>
      </Head>
      <button className={styles.backButton} onClick={handleBack}>
        &lt;
      </button>
      <h1 className={styles.title} style={{ color: car.color }}>
        {car.name}
      </h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.image}
        src={car.image}
        alt="car image"
      />
    </div>
  ):(
    <h1>Car Not Found</h1>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;

  const res = await fetch(`${domain}/api/cars/${name}`);
  const data: ICarRes = await res.json();

  return {
    props: data
  };
}
