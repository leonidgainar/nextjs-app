import { FC } from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home:FC = () => (
  <div className={styles.wrapper}>
    <Head>
      <title> Home </title>
    </Head>
    <h1> Next.js Application Home page</h1>
  </div>
);

export default Home;