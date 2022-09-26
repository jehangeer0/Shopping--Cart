import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/Header/Header";
import Navbar from "../src/components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import * as React from "react";
export default function Home() {
  const [showsideBar, setshoesideBar] = React.useState(false);
  const showHandler = () => {
    setshoesideBar(!showsideBar);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar showsideBar={showsideBar} showHandler={showHandler} />
      <Header showHandler={showHandler} />
    </>
  );
}