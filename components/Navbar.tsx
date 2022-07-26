
import { FC } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Users', path: '/users' },
  { id: 3, title: 'Posts', path: '/posts' },
];

const Navbar:FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>Next.js App</h1>
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;