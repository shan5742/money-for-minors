import React, { useState, useEffect } from "react";
import { AdviceBlock } from "../../components/AdviceBlock/AdviceBlock";
import { Button } from "../../components/Button/Button";
import { StandardLayout } from "../../layouts/StandardLayout/StandardLayout";
import s from "./HomePage.module.scss";
import { FinancialTips } from "../../data/AdviceData";

interface Props {}

interface Advice {
  id: string;
  heading: string;
  advice: string;
  parents?: string;
}

export const HomePage = (props: Props) => {
  const [data, setData] = useState<Advice[]>([]);

  useEffect(() => {
    onSeeMore();
  }, []);

  const onSeeMore = () => {
    setData(
      FinancialTips.sort(() => Math.random() - Math.random()).slice(0, 3)
    );
  };
  return (
    <StandardLayout>
      <h1 className={s.pageTitle}>No frills money advice for youngens </h1>
      <div className={s.topButtonWrapper}>
        <Button onClick={onSeeMore} text="CLICK FOR MOAR" />
      </div>
      <div className={s.adviceBlock}>
        {data.map((advice) => (
          <AdviceBlock
            key={advice.id}
            heading={advice.heading}
            advice={advice.advice}
            parents={advice.parents ? advice.parents : null}
          />
        ))}
      </div>

      <div className={s.bottomButtonWrapper}>
        <Button onClick={onSeeMore} text="CLICK FOR MOAR" />
      </div>
    </StandardLayout>
  );
};
