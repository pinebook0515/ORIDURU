import styles from "@/styles/page/about.module.scss";
import Image from "next/image";
import Link from "next/link";
import SiteHead from "../../components/common/SiteHead";
import Container from "../../components/common/Container";

const About = () => {
  return (
    <>
      <SiteHead
        title={"｜About"}
        description={"ORIDURUは、フリーランスでWebデザイナー・フロントエンドエンジニア・Webディレクターのマツモトタクムが運営している個人サイトです。"}
        keyword={""}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/about`}
      />
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
            <p>現在、フリーランスのWebディレクター・Webデザイナー・フロントエンドエンジニアとして活動しています。</p>
            <p>
              また
              <Link href="https://habiness.jp/">
                <a target="_blank">「Habiness」</a>
              </Link>
              という習慣化をサポートするサービスの事業オーナーでもあります。
            </p>
            <p>あなたがどういう経緯でこのサイトにたどり着いたかわかりませんが、とにかく見てくれてありがとうございます。</p>
            <p>簡単に自己紹介します。</p>
            <h1>経歴</h1>
            <p>
              2018年：新卒で入社した人材系の会社を退職後、数ヶ月のニート期間にHTML/CSS、JavaScriptを独学し、WEB制作会社にWEBデザイナー兼マークアップエンジニアとして転職。いわゆる下積み時代。ここでデザイン・プログラミングの楽しさを知ります。
            </p>
            <p>
              2019年：大手プログラミングスクールを運営する会社に転職。約1年間、プログラミング講師業務を行う一方で、受講生が学習で使用するeラーニング教材の開発にPMとして従事。その後、部署異動を経て、WEBディレクター兼フロントエンドエンジニアとして自社サイト開発のディレクション、デザイン、実装を担当。
            </p>
            <p>
              2021年：会社を退職し、現在はフリーランスのPM、PdM、Webディレクター・Webデザイナー・フロントエンドエンジニアとして活動中。また習慣化をサポートするサービス
              <Link href="https://habiness.jp/">
                <a target="_blank">「Habiness」</a>
              </Link>
              を運営しています。
            </p>

            <h1>好きなこと・得意なこと</h1>
            <p>好きなことは「考えること・書くこと・作ること」です。</p>
            <p>自分の頭で考えたことを何かしらの形でアウトプットすることが好きです。考えたことは頭の外に出して初めて意味を持つと思っています。</p>
            <p>得意なことは「教えること」です。</p>
            <p>
              理由はわからないのですが、もともと人に何かをわかりやすく説明するのが得意でした。その甲斐もあって学生時代は4年間予備校でアルバイトし、前の会社でも受講生にプログラミングを教える講師をやっていました。
            </p>

            <h1>価値観</h1>
            <p>私が大事にしている価値観についてお話します。</p>
            <h2>自分が好きなこと ＜ 好きな人に求められていること</h2>
            <p>私は「自分が好きなこと」よりも「好きな人に求められていること」の方が重要だと思っています。</p>
            <p>なぜなら「好きなこと」とは非常に曖昧なものだからです。実際そうは思いませんか？</p>
            <p>たとえば、私は人と話すことが好きです。ですが、営業のテレアポは好きではないですし、アパレル店員に話しかけられるのも好きではありません。</p>
            <p>
              このようにあるひとつの行動を取り上げても、それを「いつ」「どこで」「誰と」「どうやって」「何のために」など、
              <strong>その状況・文脈を構成する変数の組み合わせ次第で、行動の実態には無限のグラデーションが存在します。</strong>
            </p>
            <p>それに伴って好き嫌いも大きく変わります。</p>
            <p>つまり「〇〇すること」という「こと」単体に着目しても意味がないということです。</p>

            <p>それよりも、その行動をする背景・状況・文脈の方がよっぽど重要です。</p>
            <p>そんな中、私にとってあらゆる行動を「やる気」にさせる文脈があります。</p>
            <p>
              それが<strong>「好きな人のため」</strong>という文脈です。
            </p>
            <p>好きな人のためなら、やる気は湧いてくるし、苦手なこともがんばれます。好きな人のためなら、妥協しないし、本音を伝えることができます。</p>
            <p>※ここで言う「好きな人」とは、力になりたい人、応援したい人という意味です。</p>
            <p>
              だから私にとって「私が好きなこと」は、さして重要ではなく、それよりも<strong>「好きな人が求めること」</strong>の方がよっぽど重要なのです。
            </p>

            <h2>理解に徹する</h2>
            <p>「好きな人のために仕事をしたい」と言うと「好きじゃない人のためには仕事をしたくないのか？」と聞かれそうです。</p>
            <p>結論から言うと、答えは「YES」になります。</p>
            <p>ただ、これは好きになる努力をしないということではありません。もし努力をしないなら、私は家族や数人の友人という狭い枠の中でしか仕事ができないということになってしまいます。</p>
            <p>そうではありません。私が「人の力になりたい、応援したい」と思う瞬間は、その人の想いに触れたときです。</p>
            <p>
              たとえば、WEBサイトを作りたいというクライアントの要望には、WEBサイトを作った後に「こうなりたい」という想いがあります。それをさらに深堀れば、なぜその事業をやっているのか？事業を通して何を実現したいのか？という想いに触れることができます。
            </p>
            <p>こうしてその人の想いに触れて、共感したときに「力になりたい」と思うのです。</p>
            <p>だからこそ、私は人とのコミュニケーションにおいて、「聞くこと」をとても重要視しています。理解なくして共感はないと思っているからです。</p>
            <p>まずは理解に徹し、その人の想いに触れることで、共感し、「この人の力になりたい」と思うようになります。</p>

            <h2>習慣が人間を作る</h2>
            <p>冒頭にも伝えたとおり、私は習慣化に関するサービスを運営しています。そういう意味では習慣化のプロです。</p>
            <p>その経験からはっきりと言えることがあります。習慣とは、その人そのものです。</p>
            <p>部屋がキレイな人は「部屋をそうじする習慣」があるからキレイなのです。これほど当たり前のことはありません。</p>
            <p>年収、仕事の種類、ファッション、食事、体重、病気、知識、スキル、人間関係...etc</p>
            <p>これらはすべて習慣の影響を大きく受けています。習慣以上に人生に影響を与えているものがあるとしたら、それはDNAだけです。でもDNAは変えられません。</p>
            <p>だからこそ私は習慣を非常に大事にしています。毎朝のルーティンから、着る服、仕事の進め方、勉強、話し方、寝る前のルーティンまで私の習慣を挙げればキリがありません。</p>
            <p>
              そして、習慣の重要性に気づいているからこそ、習慣化をサポートする
              <Link href="https://habiness.jp/">
                <a target="_blank">「Habiness」</a>
              </Link>
              を立ち上げて、多くの人により良い習慣を身につけてほしいと思っています。
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
