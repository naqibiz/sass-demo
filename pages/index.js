import Head from "next/head";
import Layout from "../components/Layout";
import HeaderLayout from "../components/Layout";
import LoginRegComponent from "../components/LoginRegistrationBox";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout>
        <LoginRegComponent />
      </Layout>
    </>
  );
}
