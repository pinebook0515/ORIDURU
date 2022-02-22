import styles from "@/styles/page/contactThanks.module.scss";
import Image from "next/image";
import Link from "next/link";
import SiteHead from "../../components/common/SiteHead";
import Container from "../../components/common/Container";

const Thanks = () => {
  return (
    <>
      <SiteHead title={"｜Contact"} description={""} keyword={""} url={`${process.env.NEXT_PUBLIC_BASE_URL}contact`} />
      <Container>
        <div className={`${styles.content} mt-[160px] md:mt-[200px]`}>
          <h1 className="page_title font-en font-bold text-white text-[32px] mb-[24px]">Thank you :</h1>
          <p className="text-gray text-[14px] mt-[16px] lg:text-[16px] mt-[16px]">お問い合わせありがとうございました。</p>
          <p className="text-gray text-[14px] mt-[16px] lg:text-[16px] mt-[16px]">自動返信メールをお送りしましたので、ご確認ください。</p>
          <p className="text-gray text-[14px] mt-[16px] lg:text-[16px] mt-[16px]">内容を確認し、必要な場合はご連絡差し上げますので、しばらくお待ちくださいませ。</p>
          <p className="flex justify-center mt-[60px]">
            <Link href="/">
              <a>トップに戻る</a>
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Thanks;
