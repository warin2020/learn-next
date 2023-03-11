import type { ReactNode} from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const routes = [
  {
    name: "Home",
    path: "/home"
  },
  {
    name: "Cars",
    path: "/cars"
  }
];


export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <>
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.logo}
          src="https://static.vecteezy.com/system/resources/previews/003/694/243/non_2x/car-icon-in-flat-style-simple-traffic-icon-free-vector.jpg"
          alt="logo"
          onClick={() => router.push('/')}
        />
        <nav>
          <ul className={styles.navBarList}>
            {routes.map(route => (
              <li
                className={`${styles.navBarItem}  ${router.pathname === route.path ? styles.active : ''}`}
                key={route.name}
              >
                <a className={styles.navBarLink} href={route.path}>
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.content}>
        {children}
      </main>
      <footer className={styles.footer}>
        <span>There’s three things men always talk about – women, sports, and cars.</span>
      </footer>
    </>
  )
}
