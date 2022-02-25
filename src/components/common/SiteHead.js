import Head from "next/head";

const SiteHead = ({
  title = "",
  description = `ORIDURUは、マツモトタクムが運営する個人サイトです。フリーランスでPM、WEBディレクター、デザイナー、フロントエンドエンジニアとして活動しています。`,
  keyword,
  url,
  image = `${process.env.NEXT_PUBLIC_BASE_URL}/images/common/default.png`,
}) => {
  return (
    <Head>
      <title>{`ORIDURU${title}`}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MatsumotoTakumu" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/common/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/common/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/common/favicon-16x16.png" />
    </Head>
  );
};

export default SiteHead;
