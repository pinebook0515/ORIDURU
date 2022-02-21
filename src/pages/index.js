import SiteHead from "../components/common/SiteHead";
import Container from "../components/common/Container";
import Menu from "../components/common/Menu";

const Home = () => {
  return (
    <>
      <SiteHead title={""} description={"ORIDURUは、フリーランスWebデザイナー・フロントエンドエンジニア・Webディレクターのマツモトタクムが運営している個人サイトです。"} keyword={""} url={""} />
      <Container>
        <div className="mt-[120px] md:mt-[160px]">
          <Menu />
        </div>
      </Container>
    </>
  );
};

export default Home;
