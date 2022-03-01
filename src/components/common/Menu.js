import styles from "@/styles/common/menu.module.scss";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="">
      <li className={`${styles.menu_listItem}`}>
        <Link href="/about">
          <a className="block py-[24px]">
            <h2 className={`${styles.menu_heading} flex items-end font-en text-white text-[20px]`}>Readme</h2>
            <p className="font-en text-gray text-[14px]">Brief description about me</p>
          </a>
        </Link>
      </li>
      <li className={`${styles.menu_listItem}`}>
        <Link href="/works">
          <a className="block py-[24px]">
            <h2 className={`${styles.menu_heading} flex items-end font-en text-white text-[20px]`}>Works</h2>
            <p className="font-en text-gray text-[14px]">Works I have been involved in so far</p>
          </a>
        </Link>
      </li>
      <li className={`${styles.menu_listItem}`}>
        <Link href="/blog">
          <a className="block py-[24px]">
            <h2 className={`${styles.menu_heading} flex items-end font-en text-white text-[20px]`}>Blog</h2>
            <p className="font-en text-gray text-[14px]">Notes about anything I want to write</p>
          </a>
        </Link>
      </li>
      <li className={`${styles.menu_listItem}`}>
        <Link href="/contact">
          <a className="block py-[24px]">
            <h2 className={`${styles.menu_heading} flex items-end font-en text-white text-[20px]`}>Contact</h2>
            <p className="font-en text-gray text-[14px]">Contact me for work requests etc.</p>
          </a>
        </Link>
      </li>
      <li className={`${styles.menu_listItem}`}>
        <Link href="https://twitter.com/MatsumotoTakumu">
          <a className="block py-[24px]" target="_blank">
            <h2 className={`${styles.menu_heading} flex items-end font-en text-white text-[20px]`}>Twitter</h2>
            <p className="font-en text-gray text-[14px]">Daily updates</p>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
