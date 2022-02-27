import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja" className="font-ja font-thin leading-[2] text-black tracking-[.05em]">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css" />
        <link rel="stylesheet" href="https://use.typekit.net/ust7bhs.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Noto+Sans+JP:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <body className="w-full bg-black">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSX3P3N"
            height="0" width="0" style="display:none;visibility:hidden"/>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
