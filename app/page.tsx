"use client";

import {
  AppShell,
  Burger,
  Button,
  FileInput,
  Group,
  Input,
  Skeleton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  return (
    <div>
      <AppShell
        navbar={{
          width: 80,
          breakpoint: "sm",
          collapsed: { mobile: !desktopOpened, desktop: !desktopOpened },
        }}
        padding="md"
      >
        <div className={styles.aside_toggle} onClick={toggleDesktop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-left"
          >
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="15" x2="3" y1="12" y2="12" />
            <line x1="17" x2="3" y1="18" y2="18" />
          </svg>
        </div>
        <AppShell.Navbar p="md" className={styles.navbar}>
          hi
        </AppShell.Navbar>
        <AppShell.Main className={styles.main}>
          <div className={styles.hero_container}>
            <div className={styles.sticky_top_menu}>
              <Button variant="transparent" component={Link} href="#">
                HOW IT WORKS
              </Button>{" "}
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

          <div className={styles.info_container}>
            <h2>How to cut audio</h2>
            <p>
              This app can be used to trim and/or cut audio tracks, remove an
              audio fragments. Fade in and fade out your music easily to make
              the audio harmoniously.
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
      </AppShell>
    </div>
  );
}
