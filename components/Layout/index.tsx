"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AlignLeft } from "lucide-react";

import styles from "./layout.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, { toggle: toggleSidebar }] = useDisclosure(true);

  return (
    <AppShell
      navbar={{
        width: { base: 80, sm: 80 },
        breakpoint: "",
        collapsed: { mobile: !isOpen, desktop: !isOpen },
      }}
      padding="md"
    >
      <div className={styles.sidebar_toggle} onClick={toggleSidebar}>
        <AlignLeft size={34} />
      </div>
      {children}
    </AppShell>
  );
};

export default Layout;
