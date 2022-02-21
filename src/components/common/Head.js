import Head from "next/head";
import defaultOgp from "../../../public/images/common/default.png";

export default ({ title = "", description, keyword, url, image }) => {
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
      {/* <link
        rel="shortcut icon"
        href={
          'https://cdn.qiita.com/assets/favicons/public/production-4ff10c1e1e2b5fcb353ff9cafdd56c70.ico'
        }
      />
      <link
        rel="apple-touch-icon"
        href={
          'https://cdn.qiita.com/assets/favicons/public/apple-touch-icon-f9a6afad761ec2306e10db2736187c8b.png'
        }
      /> */}
    </Head>
  );
};
