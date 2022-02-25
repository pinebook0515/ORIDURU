import styles from "@/styles/page/blogIndex.module.scss";
import Link from "next/link";
import SiteHead from "../../components/common/SiteHead";
import Container from "../../components/common/Container";
import Pagination from "../../components/common/Pagination";
import { parseISO, format } from "date-fns";
import { client } from "../../../lib/client";

const Blog = ({ data, totalCount }) => {
  const PER_PAGE = 6;
  return (
    <>
      <SiteHead
        title={"｜Blog"}
        description={"記事一覧 - ORIDURUは、マツモトタクムが運営する個人サイトです。フリーランスでPM、WEBディレクター、デザイナー、フロントエンドエンジニアとして活動しています。"}
        keyword={""}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog`}
      />
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
          <Pagination pathName={"blog"} currentPageNumber={1} maxPageNumber={Math.ceil(totalCount / PER_PAGE)} />
        </div>
      </Container>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog", queries: { orders: "-publishedAt", offset: 0, limit: 6 } });

  return {
    props: {
      data: data.contents,
      totalCount: data.totalCount,
    },
  };
};
