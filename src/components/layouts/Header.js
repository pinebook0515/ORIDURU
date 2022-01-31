import styles from "@/styles/layouts/header.module.scss";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

import Logo from "../../../public/images/common/logo.svg";
import Container from "../common/Container";
import Menu from "../common/Menu";

const Header = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  });

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  Router.events.on("routeChangeComplete", () => {
    setOpenMenu(false);
  });

  let btn;
  if (!openMenu) {
    btn = <Image src="/images/common/menu-btn.svg" width={21} height={5} alt="" className="cursor-pointer" onClick={toggleMenu} />;
  } else {
    btn = <Image src="/images/common/menu-btn-close.svg" width={18} height={18} alt="" className="cursor-pointer" onClick={toggleMenu} />;
  }

  if (process.browser) {
    const body = document.querySelector("body");
    if (openMenu) {
      body.classList.add("fixed");
    } else {
      body.classList.remove("fixed");
    }
  }

  return (
    <header className="header bg-black fixed w-full z-[999]">
      <Container>
        <div className="flex justify-between items-center py-[20px] md:py-[40px]">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          {isHome ? null : btn}
        </div>
      </Container>
      {isHome ? null : (
        <nav className={`${styles.menu_nav} ${openMenu ? `${styles.open}` : ""}`}>
          <Container>
            <Menu />
          </Container>
        </nav>
      )}
    </header>
  );
};

export default Header;
