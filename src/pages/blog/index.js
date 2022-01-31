import styles from "@/styles/page/blogIndex.module.scss";
import Link from "next/link";
import Container from "../../components/common/Container";
import { parseISO, format } from "date-fns";
import { client } from "../../../lib/client";

const Blog = ({ data }) => {
  return (
    <Container>
      <div className="mt-[160px] md:mt-[200px]">
        <h1 className="page_title font-en font-bold text-white text-[32px] mb-[24px]">Blog</h1>

        <ul className={`${styles.blog_list} mt-[80px]`}>
          {data.map((blog) => {
            return (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>
                    <div className="">
                      <h2 className="">{blog.title}</h2>
                      <time className="">{format(new Date(blog.publishedAt), "yyyy.MM.dd")}</time>
                    </div>
                  </a>
                </Link>
              </li>
            );
          })}
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

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog", queries: { orders: "-publishedAt" } });

  return {
    props: {
      data: data.contents,
    },
  };
};
