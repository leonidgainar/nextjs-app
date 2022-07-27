
import { FC } from 'react';
import Head from "next/head";

const Error:FC = () => (
  <div>
    <Head>
      <title> Not Found </title>
    </Head>
    <h1> 404 Page not found</h1>
    <h2> Something went wrong </h2>
  </div>
);

export default Error;