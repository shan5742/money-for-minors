import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { StandardLayout } from "../../layouts/StandardLayout/StandardLayout";
import s from "./ContactPage.module.scss";

interface Props {}

export const ContactPage = (props: Props) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
  return (
    <StandardLayout>
      <h1 className={s.pageTitle}>Get in touch</h1>
      {success && <p className={s.success}>Thanks for your message</p>}
      <div className={s.wrapper}>
        <form
          className={s.form}
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact/?success=true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={s.formRow}>
            <input
              className={s.input}
              type="text"
              id="name"
              name="name"
              placeholder="What shall we call ya?"
            />
            <input
              className={s.input}
              type="email"
              id="email"
              name="email"
              placeholder="how can we reach ya"
            />
          </div>
          <div className={s.formRow}>
            <textarea
              className={s.textarea}
              id="message"
              name="message"
              placeholder="Your message"
              rows={10}
            />
          </div>
          <Button text="Submit" type="submit" />
        </form>
      </div>
    </StandardLayout>
  );
};
