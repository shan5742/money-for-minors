import { StandardLayout } from "../../layouts/StandardLayout/StandardLayout";
import s from "./ThanksPage.module.scss";

interface Props {}

export const ThanksPage = (props: Props) => {
  return (
    <StandardLayout>
      <div className={s.wrapper}>
        <h2 className={s.messageHead}>Thanks for reaching out</h2>
      </div>
    </StandardLayout>
  );
};
