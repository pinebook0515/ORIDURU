import styles from "@/styles/page/blogIndex.module.scss";
import Link from "next/link";
import Container from "../../components/common/Container";

const Blog = () => {
  return (
    <Container>
      <div className="mt-[160px] md:mt-[200px]">
        <h1 className="page_title font-en font-bold text-white text-[32px] mb-[24px]">Blog</h1>
        <ul className={`${styles.blog_list} mt-[80px]`}>
          <li className="">
            <Link href="/blog/1">
              <a>
                <div className="">
                  <h2 className="">記事タイトルが入ります。記事タイトルが入ります。記事タイトルが入ります。</h2>
                  <time className="">2022/02/01</time>
                </div>
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/blog/1">
              <a>
                <div className="">
                  <h2 className="">記事タイトルが入ります。記事タイトルが入ります。記事タイトルが入ります。</h2>
                  <time className="">2022/02/01</time>
                </div>
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/blog/1">
              <a>
                <div className="">
                  <h2 className="">記事タイトルが入ります。記事タイトルが入ります。記事タイトルが入ります。</h2>
                  <time className="">2022/02/01</time>
                </div>
              </a>
            </Link>
          </li>
        </ul>
        <div className={`${styles.pager}`}>
          <Link href="/">
            <a className={`${styles.pager_prev}`}>Prev</a>
          </Link>
          <Link href="/">
            <a className={`${styles.pager_next}`}>Next</a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
