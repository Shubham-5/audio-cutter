"use client";

import { AppShell, Button } from "@mantine/core";
import Link from "next/link";

import styles from "./page.module.css";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <Sidebar />

      <AppShell.Main className={styles.main}>
        <div className={styles.hero_container}>
          <div className={styles.sticky_top_menu}>
            <Button variant="transparent" component={Link} href="#info">
              HOW IT WORKS
            </Button>
            <Button variant="transparent" component={Link} href="#">
              JOINER
            </Button>
          </div>
          <h1 className={styles.hero_title}>Audio Cutter</h1>
          <h3 className={styles.hero_subheading}>
            Free editor to trim and cut any audio file online
          </h3>
          <input
            type="file"
            placeholder="Browse my files"
            accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio"
            hidden
          />
          <button className={styles.file_selector}>Browse my files</button>
        </div>

        <div className={styles.info_container} id="info">
          <h2>How to cut audio</h2>
          <p>
            This app can be used to trim and/or cut audio tracks, remove an
            audio fragments. Fade in and fade out your music easily to make the
            audio harmoniously.
            <br />
            <br /> It fast and easy to use. You can save the audio file in any
            format (codec parameters are configured)
            <br />
            <br /> It works directly in the browser, no needs to install any
            software, is available for mobile devices.
          </p>
          <h3>Privacy and Security Guaranteed</h3>
          <p>This is serverless app. Your files does not leave your device</p>
        </div>
      </AppShell.Main>
    </Layout>
  );
}
