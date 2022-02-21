import styles from "@/styles/page/worksIndex.module.scss";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/common/Container";
import Pagination from "../../components/common/Pagination";
import { parseISO, format } from "date-fns";
import { client } from "../../../lib/client";

const Works = ({ data, totalCount }) => {
  const PER_PAGE = 6;
  return (
    <Container>
      <div className="mt-[160px] md:mt-[200px]">
        <h1 className="page_title font-en font-bold text-white text-[32px] mb-[24px]">Works</h1>

        <ul className={`${styles.works_list} mt-[80px] lg:grid lg:grid-cols-2 lg:gap-[80px]`}>
          {data.map((work) => {
            return (
              <li className="" key={work.id}>
                {work.isprotect ? (
                  <Link href={`/works/private/${work.id}`}>
                    <a>
                      <div className="">
                        <div className="w-full h-[215px] object-contain rounded-[10px] overflow-hidden">
                          <Image src="/images/works/password.png" layout="responsive" width={780} height={477.06} alt="" />
                        </div>
                        <h2 className="">非公開実績</h2>
                        <p className="">{work.purpose}</p>
                      </div>
                    </a>
                  </Link>
                ) : (
                  <Link href={`/works/${work.id}`}>
                    <a>
                      <div className="">
                        <div className="w-full h-[215px] object-contain rounded-[10px] overflow-hidden">
                          <Image src={work.thumbnail.url} className="z-[-1]" layout="responsive" width={work.thumbnail.width} height={work.thumbnail.height} alt="" />
                        </div>
                        <h2 className="">{work.title}</h2>
                        <p className="">{work.purpose}</p>
                      </div>
                    </a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <Pagination pathName={"works"} currentPageNumber={1} maxPageNumber={Math.ceil(totalCount / PER_PAGE)} />
      </div>
    </Container>
  );
};

export default Works;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works", queries: { orders: "-publishedAt", offset: 0, limit: 6 } });

  return {
    props: {
      data: data.contents,
      totalCount: data.totalCount,
    },
  };
};
