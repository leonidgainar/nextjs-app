import { FC } from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: FC = () => (
  <div className={styles.wrapper}>
    <Head>
      <title> Home </title>
    </Head>
    <h1> Welcome to Next.js Application </h1>
  </div>
);

export default Home;