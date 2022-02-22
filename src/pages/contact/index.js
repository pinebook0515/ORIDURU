import React, { useState } from "react";
import styles from "@/styles/page/contact.module.scss";
import SiteHead from "../../components/common/SiteHead";
import Container from "../../components/common/Container";

const Contact = () => {
  return (
    <>
      <SiteHead title={"｜Contact"} description={""} keyword={""} url={`${process.env.NEXT_PUBLIC_BASE_URL}contact`} />
      <Container>
        <div className="mt-[160px] md:mt-[200px]">
          <h1 className="page_title font-en font-bold text-white text-[32px] mb-[24px]">Contact</h1>
          <p className="text-gray text-[14px] mt-[16px] lg:text-[16px] mt-[16px]">お仕事のご依頼などはこちらからお問い合わせください。</p>
          <form action="https://usebasin.com/f/f878a76a0d3b" method="POST" className={`${styles.contact__form} mt-[60px]`} encType="multipart/form-data" id="form">
            <div className="contact__form-block">
              <label htmlFor="name" className={`${styles.contact__form_label} ${styles.required}`}>
                お名前
              </label>
              <input className="w-full block" id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="contact__form-block mt-[24px]">
              <label htmlFor="company" className={`${styles.contact__form_label}`}>
                貴社名
              </label>
              <input className="w-full block" id="company" name="company" type="text" placeholder="Your company name" />
            </div>
            <div className="contact__form-block mt-[24px]">
              <label htmlFor="email" className={`${styles.contact__form_label} ${styles.required}`}>
                メールアドレス
              </label>
              <input className="w-full block" id="email" name="email" type="email" placeholder="Your email" required />
            </div>
            <div className="contact__form-block mt-[24px]">
              <label htmlFor="message" className={`${styles.contact__form_label} ${styles.required}`}>
                お問い合わせ内容
              </label>
              <textarea className="block w-full" id="message" name="message" placeholder="" required />
            </div>
            <div className="contact__form-block flex justify-center mt-[60px]">
              <button className="bg-[#d7d7d7]" type="submit">
                送信
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
