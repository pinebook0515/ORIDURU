import styles from "@/styles/page/worksIndex.module.scss";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/common/Container";

const Works = () => {
  return (
    <Container>
      <div className="mt-[160px] md:mt-[200px]">
        <h1 className="page_title font-en font-bold text-white text-[32px] mb-[24px]">Works</h1>
        <ul className={`${styles.works_list} mt-[80px] lg:grid lg:grid-cols-2 lg:gap-[80px]`}>
          <li className="">
            <Link href="/about">
              <a>
                <div className="">
                  <Image src="/images/common/sample.png" className="z-[-1]" layout="responsive" width={327} height={200} alt="" />
                  <h2 className="">株式会社サンプル</h2>
                  <p className="">サービスサイト</p>
                </div>
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/about">
              <a>
                <div className="">
                  <Image src="/images/common/sample.png" className="z-[-1]" layout="responsive" width={327} height={200} alt="" />
                  <h2 className="">株式会社サンプル</h2>
                  <p className="">サービスサイト</p>
                </div>
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/about">
              <a>
                <div className="">
                  <Image src="/images/common/sample.png" className="z-[-1]" layout="responsive" width={327} height={200} alt="" />
                  <h2 className="">株式会社サンプル</h2>
                  <p className="">サービスサイト</p>
                </div>
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/about">
              <a>
                <div className="">
                  <Image src="/images/common/sample.png" className="z-[-1]" layout="responsive" width={327} height={200} alt="" />
                  <h2 className="">株式会社サンプル</h2>
                  <p className="">サービスサイト</p>
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

export default Works;
