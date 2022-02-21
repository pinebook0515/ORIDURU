import styles from "@/styles/page/blogDetail.module.scss";
import Link from "next/link";
import Image from "next/image";
import Head from "../../components/common/Head";
import Container from "../../components/common/Container";
import { parseISO, format } from "date-fns";
import { client } from "../../../lib/client";

const Blog = ({ data }) => {
  return (
    <>
      <Head title={"｜Blog"} description={""} keyword={""} url={""} image={data.thumbnail.url} />
      <Container>
        <div className="mt-[160px] md:mt-[200px]">
          <h1 className="page_title font-ja font-bold text-white text-[20px] lg:text-[24px]">{data.title}</h1>
          <time className="text-gray text-[12px] lg:text-[14px]">{format(new Date(data.publishedAt), "yyyy.MM.dd")}</time>
          <div className={`${styles.content}`} dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </Container>
    </>
  );
};

export default Blog;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      data: data,
    },
  };
};
