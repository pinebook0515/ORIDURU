import styles from "@/styles/page/blogDetail.module.scss";
import Link from "next/link";
import Image from "next/image";
import SiteHead from "../../components/common/SiteHead";
import Container from "../../components/common/Container";
import { parseISO, format } from "date-fns";
import { client } from "../../../lib/client";

const Blog = ({ data }) => {
  return (
    <>
      <SiteHead title={`｜${data.title}`} description={data.description} keyword={""} url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${data.id}`} image={data.thumbnail.url} />
      <Container>
        <div className="mt-[160px] md:mt-[200px]">
          <div className="rounded-[10px] overflow-hidden">
            <Image src={data.thumbnail.url} className="z-[-1]" layout="responsive" width={data.thumbnail.width} height={data.thumbnail.height} alt="" />
          </div>
          <h1 className="page_title font-ja font-bold text-white text-[20px] mt-[40px] lg:text-[24px]">{data.title}</h1>
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
