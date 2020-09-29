import Head from "next/head";
import Cats from "./cats";
import AddCat from "./addCat";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>age</th>
              <th>Breed</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <AddCat />
            <Cats />
          </tbody>
        </table>
      </main>
    </div>
  );
}
