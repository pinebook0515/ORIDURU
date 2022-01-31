import styles from "@/styles/page/about.module.scss";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/common/Container";

const About = () => {
  return (
    <Container>
      <div className="mt-[160px] md:mt-[200px]">
        <h1 className="page_title font-en font-bold text-white text-[32px] mb-[24px]">About</h1>
        <div className={`${styles.content}`}>
          <p>
            はじめまして。マツモト タクム
            <Link href="https://twitter.com/MatsumotoTakumu">
              <a target="_blank">（@MatsumotoTakumu）</a>
            </Link>
            といいます。
          </p>
          <div className="rounded-[10px] overflow-hidden my-[40px] lg:my-[60px]">
            <Image src="/images/common/profile.jpg" layout="responsive" width={500} height={333.37} alt="" />
          </div>
          <p>※写真うつりは良い方だと言われます。</p>
          <p>現在、フリーランスのWebデザイナー・フロントエンドエンジニア・Webディレクターとして活動しています。</p>
          <p>
            また
            <Link href="https://habiness.jp/">
              <a target="_blank">「Habiness」</a>
            </Link>
            という習慣化をサポートするサービスの事業オーナーでもあります。
          </p>
          <p>あなたがどういう経緯でこのサイトにたどり着いたかわかりませんが、何かしら私に興味を持ってくれているのだと前向きに捉えることにします。</p>
          <p>ということなので簡単に自己紹介しますね。</p>
          <h1>価値観</h1>
          <p>はじめに私が大事にしている価値観についてお話します。</p>
          <h2>人の人生に正の影響を与えること</h2>
          <p>仕事を行うときは常に「それは本当に相手の人生に良い影響を与えるのか」という視点で考えています。</p>
          <p>クライアントやその先のユーザーに喜んでもらい、さらにそれを自分の喜びとするためには、当事者意識を持って、徹底的に相手視点で考えることが必要です。</p>
          <p>この価値観は妥協できません。</p>
          <p>どんなに金銭的な報酬が良くても、信念を曲げて仕事をすることは、結果的に感情的な報酬を安売りし、心を貧しくするからです。</p>
          <h2>習慣が人間を作る</h2>
          <p>冒頭にも伝えたとおり、私は習慣化に関するサービスを運営しています。そういう意味では習慣化のプロです。</p>
          <p>だからこそはっきりと言えることがあります。習慣とは、その人そのものです。</p>
          <p>私は習慣を非常に大事にしています。毎朝のルーティンから、着る服、仕事の進め方、勉強、話し方、寝る前のルーティンなど上げればキリがありません。</p>
          <p>良い習慣を身につけることは良い人生につながると確信しています。</p>
        </div>
      </div>
    </Container>
  );
};

export default About;
