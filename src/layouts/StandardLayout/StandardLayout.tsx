import React, { HTMLProps } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import s from "./StandardLayout.module.scss";

type PropsT = HTMLProps<HTMLDivElement>;

export const StandardLayout = ({ children }: PropsT) => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.content}>{children}</div>
      <Footer />
    </div>
  );
};
