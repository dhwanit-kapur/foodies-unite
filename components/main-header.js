import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";

import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="An image of food in a plate" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community Page</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
