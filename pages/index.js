import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import FileInput from '../components/FileInput'
import Camera from '../components/Camera'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HIM playground</title>
        <meta
          name="description"
          content="HIM playground for exploring mobile capture"
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Welcome to HIM 華研 Playground</h2>

        <h3 className={styles.description}>兩種取用相機的方法</h3>
        <p>1. Use Image File Input</p>
        <FileInput />
        <br />
        <br />
        <p>2. Access the camera interactively</p>
        <Camera />
      </main>
    </div>
  )
}
