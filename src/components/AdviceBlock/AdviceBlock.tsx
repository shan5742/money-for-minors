import React from "react";
import s from "./AdviceBlock.module.scss";

interface Props {
  heading: string;
  advice: string;
  parents?: string | null;
}

export const AdviceBlock = ({ heading, advice, parents }: Props) => {
  return (
    <div className={s.container}>
      <h2 className={s.heading}>{heading}</h2>
      <p className={s.advice}>{advice}</p>
      {parents && (
        <p className={s.parents}>
          Parents:
          {parents}
        </p>
      )}
    </div>
  );
};
