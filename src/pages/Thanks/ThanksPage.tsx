import { StandardLayout } from "../../layouts/StandardLayout/StandardLayout";
import s from "./ThanksPage.module.scss";

interface Props {}

export const ThanksPage = (props: Props) => {
  return (
    <StandardLayout>
      <h2 className={s.message}>
        Thanks for reaching out, we'll be in touch soon
      </h2>
    </StandardLayout>
  );
};
