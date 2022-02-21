import styles from "@/styles/page/blogIndex.module.scss";
import Link from "next/link";
import Container from "../../../components/common/Container";
import PaginationArrow from "../../../components/common/Pagination";
import { parseISO, format } from "date-fns";
import { client } from "../../../../lib/client";

const PER_PAGE = 6;

const BlogPageId = ({ data, totalCount, currentPageNumber }) => {
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
        <PaginationArrow pathName={"blog"} currentPageNumber={currentPageNumber} maxPageNumber={Math.ceil(totalCount / PER_PAGE)} />
      </div>
    </Container>
  );
};

export default BlogPageId;

// 動的なページを作成
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const pageNumbers = [];
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map((data) => `/blog/page/${data}`);
  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", queries: { orders: "-publishedAt", offset: (id - 1) * 6, limit: 6 } });

  return {
    props: {
      data: data.contents,
      totalCount: data.totalCount,
      currentPageNumber: Number(id),
    },
  };
};
