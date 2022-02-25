import styles from "@/styles/page/worksDetail.module.scss";
import Link from "next/link";
import Image from "next/image";
import SiteHead from "../../../components/common/SiteHead";
import Container from "../../../components/common/Container";
import { parseISO, format } from "date-fns";
import { client } from "../../../../lib/client";

const Work = ({ data }) => {
  return (
    <>
      <SiteHead
        title={"｜非公開実績"}
        description={"実績 - ORIDURUは、マツモトタクムが運営する個人サイトです。フリーランスでPM、WEBディレクター、デザイナー、フロントエンドエンジニアとして活動しています。"}
        keyword={""}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/works/${data.id}`}
      />
      <Container>
        <div className="mt-[160px] md:mt-[200px]">
          <h1 className="page_title font-ja font-bold text-white text-[20px] lg:text-[24px]">{data.title}</h1>
          <div className="rounded-[10px] overflow-hidden my-[40px]">
            <Image src={data.thumbnail.url} className="" layout="responsive" width={data.thumbnail.width} height={data.thumbnail.height} alt="" />
          </div>
          <div className={`${styles.content}`} dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </Container>
    </>
  );
};

export default Work;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content) => `/works/private/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      data: data,
    },
  };
};
