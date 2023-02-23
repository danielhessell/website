import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Hessel | Sharbe</title>
        <meta name="description" content="Backend Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://www.linkedin.com/in/danielhessell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              by
              <strong>Daniel Hessel</strong> - Sharbe Tecnologia LTDA.
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1>Novas atualizações em breve!</h1>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
