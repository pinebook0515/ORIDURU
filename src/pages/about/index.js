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
        description={"自己紹介 - ORIDURUは、マツモトタクムが運営する個人サイトです。フリーランスでPM、WEBディレクター、デザイナー、フロントエンドエンジニアとして活動しています。"}
        keyword={""}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/about`}
      />
      <Container>
        <div className="mt-[160px] md:mt-[200px]">
          <h1 className="page_title font-en font-bold text-white text-[32px] mb-[24px]">Readme</h1>
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
            <p>現在、フリーランスのPM・Webディレクター・Webデザイナー・フロントエンドエンジニアとして活動しています。</p>
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
            <p>2018年：新卒で入社した人材系の会社を退職後、数ヶ月のニート期間にHTML/CSS、JavaScriptを独学し、WEB制作会社にWEBデザイナー兼マークアップエンジニアとして転職。いわゆる下積み時代。</p>
            <p>
              2019年：大手プログラミングスクールを運営する会社に転職。プログラミング講師業務を行う一方で、受講生が学習で使用するeラーニング教材の開発にPMとして従事。その後、部署異動を経て、WEBディレクター兼フロントエンドエンジニアとして自社サイト開発のディレクション、デザイン、実装を担当。
            </p>
            <p>
              2021年：会社を退職し、現在はフリーランスのPM、Webディレクター・Webデザイナー・フロントエンドエンジニアとして活動中。また習慣化をサポートするサービス
              <Link href="https://habiness.jp/">
                <a target="_blank">「Habiness」</a>
              </Link>
              を運営しています。
            </p>
            <h1>スキルセット</h1>
            <p>要件定義、デザイン、実装までワンストップで作業することが可能です。PM・WEBディレクターの経験もあるので進行管理などもお任せください。</p>
            <h2>デザイン</h2>
            <p>Figma / Photoshop / Illustrator / XD</p>
            <h2>コーディング</h2>
            <p>HTML / CSS / JavaScript(ES6) / Next.js / React / Wordpress / Google App Script</p>
            <h2>その他</h2>
            <p>GitHub / Slack / Chatwork / Notion</p>
            {/* <h1>好きなこと・得意なこと</h1>
            <p>好きなことは「考えること・書くこと・作ること」です。</p>
            <p>自分の頭で考えたことを何かしらの形でアウトプットすることが好きです。考えたことは頭の外に出して初めて意味を持つと思っています。</p>
            <p>得意なことは「教えること」です。</p>
            <p>
              理由はわからないのですが、もともと人に何かをわかりやすく説明するのが得意でした。その甲斐もあって学生時代は4年間予備校でアルバイトし、前の会社でも受講生にプログラミングを教える講師をやっていました。
            </p> */}
            <h1>価値観</h1>
            <p>私が大事にしている価値観についてお話します。</p>
            <h2>好きなこと ＜ 好きな人のためにやること</h2>
            <p>私は「好きなこと」よりも「好きな人のためにやること」の方が重要だと思っています。</p>
            <p>なぜなら「好きなこと」とは非常に曖昧なものだからです。実際そうは思いませんか？</p>
            <p>たとえば、私は人と話すことが好きです。ですが、営業のテレアポは好きではないですし、アパレル店員に話しかけられるのも好きではありません。</p>
            <p>このようにあるひとつの行動を取り上げても、それを「いつ」「どこで」「誰と」「どうやって」「何のために」にやるかによって好き嫌いは大きく変わります。</p>
            <p>これが私が「好きなこと」が曖昧だと思う所以（ゆえん）です。</p>
            <p>つまり「〇〇すること」という「こと」単体に着目しても意味がないということです。</p>
            <p>それよりも、その行動をする背景・状況・文脈の方がよっぽど重要です。</p>
            <p>
              中でも<strong>「好きな人のため」</strong>という文脈は私にあらゆる行動をやる気にさせます。
            </p>
            <p>※ここで言う「好きな人」とは、力になりたい人、応援したい人という意味です。</p>
            <p>「好きなこと」はふわふわしていて掴みどころのない曖昧なモノに対して、「好きな人」はこの世に明確に存在するヒトです。</p>
            <p>存在するかわからないもの、不安で揺らいでしまうものよりも、明確に存在するものを軸に行動した方がいざというとき迷わなくて済みます。</p>
            <p>
              だから私にとって「自分が好きなこと」は、それほど重要ではなく、それよりも<strong>「好きな人のためにやること」</strong>の方が重要なのです。
            </p>
            {/* <h2>理解に徹する</h2>
            <p>「好きな人のために仕事をしたい」と言うと「好きじゃない人のためには仕事をしたくないのか？」と聞かれそうです。</p>
            <p>結論から言うと、答えは「YES」になります。</p>
            <p>しかし、これは好きになる努力をしないということではありません。もし努力をしないなら、私は家族や友人という狭い枠の中でしか仕事ができないということになってしまいます。</p>
            <p>そうではありません。私が「人の力になりたい、応援したい」と思う瞬間は、その人の想いに触れたときです。</p>
            <p>
            たとえば、WEBサイトを作りたいというクライアントの要望には、WEBサイトを作った後に「こうなりたい」という想いがあります。それをさらに深堀れば、なぜその事業をやっているのか？事業を通して何を実現したいのか？という想いに触れることができます。
            </p>
            <p>こうしてその人の想いに触れて、共感したときに「力になりたい」と思うのです。</p>
            <p>だからこそ、私は人とのコミュニケーションにおいて、「聞くこと」をとても重要視しています。理解なくして共感はないと思っているからです。</p>
            <p>まずは理解に徹し、その人の想いに触れることで、共感し、「この人の力になりたい」と思うようになります。</p> */}
            {/* <h2>理解に徹する</h2>
            <p>私が「この人の力になりたい」と思うのは、その人を理解し、想いに触れて、共感したときです。</p>
            <p>だからこそ、まずは「相手の理解に徹すること」を何よりも大事にしています。</p> */}
            <h2>習慣が人間を作る</h2>
            <p>冒頭にも伝えたとおり、私は習慣化に関するサービスを運営しています。そういう意味では習慣化のプロです。</p>
            <p>その経験からはっきりと言えることがあります。習慣とは、その人そのものです。</p>
            <p>部屋がキレイな人は「部屋をそうじする習慣」があるからキレイなのです。これほど当たり前のことはありません。</p>
            <p>仕事、収入、ファッション、食事、体重、病気、知識、スキル、人間関係...etc</p>
            <p>これらはすべて習慣の影響を大きく受けています。習慣以上に人生に影響を与えているものがあるとしたら、それは遺伝子だけでしょう。でも遺伝子は変えられません。</p>
            <p>だからこそ私は習慣を非常に大事にしています。良い習慣を身につければ、良い人生になると確信しているからです。</p>
            <p>
              そして、習慣の重要性に気づいているからこそ、習慣化をサポートする
              <Link href="https://habiness.jp/">
                <a target="_blank">「Habiness」</a>
              </Link>
              を立ち上げて、多くの人により良い習慣を身につけてほしいと思っています。
            </p>
            <p>以上、自己紹介でした。</p>
            <p className="flex justify-center">
              <Link href="/">
                <a className={styles.to_top}>トップに戻る</a>
              </Link>
            </p>
            {/* <h1>ORIDURU（このサイト）について</h1>
            <p>サイト名の由来は「折り紙 × 綴る（つづる）」から来ています。</p>
            <p>ロゴも「折り綴る→折り鶴」というちょっとした言葉遊びを入れて、鶴を追っている途中の図面をロゴにしました。</p>
            <p>
              いきなりですが、みなさんは<strong>「紙を42回半分に折ると、月の高さまで届く」</strong>という話を知っていますか？
            </p>
            <blockquote>
              地球から月までの距離がおよそ38万km。厚さ0.1mmの紙を1回折ると、0.2mmになり、2回折ると0.4mmになる。繰り返していくたびに厚さは倍々になっていき、これを42回繰り返すと約44万kmになる。なんと最後には月に届く高さにまでなってしまう。
            </blockquote>
            <p>もちろん、月に届くというのはあくまで理論上の話であり、実際に折ることはできません。でも私はこの話を知ったときロマンを感じました。以来、とても印象に残っています。</p>
            <p>私はこの話のように生きたいと思っています。</p>
            <p>もし本気で月まで届かせようとする人がいたら、紙の端と端を1mmのズレもないようにぴったり合わせて丁寧に折ると思うんです。</p>
            <p>何度も折っていくうちに折り目は分厚くなり、力が必要になっていきます。歯を食いしばりながらなんとか折って、前よりちょっと高いところにいる。そうやって少しずつ高みを目指していく。</p>
            <p>このサイトはそうやって高みを目指す過程で自分の作ったことや考えたことを「紙を折るように綴ろう」と思って「ORIDURU」と命名しました。</p> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
