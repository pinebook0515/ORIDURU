import styles from "@/styles/layouts/footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} footer mt-[120px] py-[4px]`}>
      <p className="font-en text-gray text-[10px] text-center">© 2022 ORIDURU</p>
    </footer>
  );
};

export default Footer;
