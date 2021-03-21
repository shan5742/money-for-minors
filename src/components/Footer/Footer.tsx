import React from "react";
import s from "./Footer.module.scss";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <div className={s.footer}>
      <p>
        Made with ❤️ by{" "}
        <a className={s.footerLink} href="https://asamshan.dev">
          Asam Shan
        </a>
      </p>
      <div className={s.coffee}>
        <p>Like what you see? Buy me a coffee </p>
        <a href="https://www.buymeacoffee.com/asamshan">
          <img
            style={{ height: 30, width: 30 }}
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
        </a>
      </div>
    </div>
  );
};
