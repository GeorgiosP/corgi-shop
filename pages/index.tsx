import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Corgi Shop</title>
        <meta name="description" content="My Corgi Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Store</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="https://nextjs.org/docs">
              <img src="/images/corgi-shirt.png" alt="corgi tshirt" />
              <h2>Corgi Tee</h2>
              <p>Show your corgi love with this amazing tee.</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="https://nextjs.org/learn">
              <img src="/images/corgi-sticker-large.png" alt="corgi sticker" />
              <h2>Corgi stickers</h2>
              <p>Can never go wrong with a corgi sticker!</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="https://github.com/vercel/next.js/tree/master/examples">
              <img
                src="/images/corgi-shirt-combo.png"
                alt="corgi tshirt and sticker combo"
              />
              <h2>Corgi Combo</h2>
              <p>Why choose one?! have both today!</p>
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
