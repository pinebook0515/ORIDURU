import styles from "@/styles/page/about.module.scss";
import Image from "next/image";
import Container from "../../components/common/Container";

const About = () => {
  return (
    <Container>
      <div className="mt-[160px] md:mt-[200px]">
        <h1 className="page_title font-en font-bold text-white text-[32px] mb-[24px]">About</h1>
        <div className={`${styles.content}`}>
          <p>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>
          <h1>見出しが入ります。見出しが入ります。見出しが入ります。見出しが入ります。</h1>
          <p>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>
          <h2>見出しが入ります。見出しが入ります。見出しが入ります。見出しが入ります。</h2>
          <p>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>
          <h3>見出しが入ります。見出しが入ります。見出しが入ります。見出しが入ります。</h3>
          <p>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>
          <div className="rounded-[10px] overflow-hidden my-[40px] lg:my-[60px]">
            <Image src="/images/common/sample.png" layout="responsive" width={327} height={200} alt="" />
          </div>
          <p>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
