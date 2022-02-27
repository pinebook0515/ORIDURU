import "../../styles/globals.css";
import Layout from "../components/layouts/Layout";
import GoogleTagManager from "../components/common/GoogleTagManager";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleTagManager />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
