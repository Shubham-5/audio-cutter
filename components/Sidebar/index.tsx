import { ScrollArea, AppShell } from "@mantine/core";
import { CircleHelp, Languages, Play, Scissors } from "lucide-react";

import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      <AppShell.Navbar className={styles.sidebar}>
        <AppShell.Section
          grow
          mt={80}
          mb={30}
          component={ScrollArea}
          className={styles.nav_icon_container}
        >
          <div className={`${styles.icon_container} ${styles.active}`}>
            <Scissors /> Cutter
          </div>

          {Array(18)
            .fill(0)
            .map((_, index) => (
              <div key={index} className={styles.icon_container}>
                <Play />
                Support
              </div>
            ))}
        </AppShell.Section>
        <AppShell.Section className={styles.footer_nav_section}>
          <div className={styles.icon_container}>
            <CircleHelp />
            Support
          </div>
          <div className={styles.icon_container}>
            <Languages />
          </div>
        </AppShell.Section>
      </AppShell.Navbar>
    </div>
  );
};

export default Sidebar;
