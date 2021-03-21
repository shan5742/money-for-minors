import React from "react";
import { StandardLayout } from "../../layouts/StandardLayout/StandardLayout";
import s from "./AboutPage.module.scss";
import { Link } from "react-router-dom";

interface Props {}

export const AboutPage = (props: Props) => {
  return (
    <StandardLayout>
      <h1 className={s.pageTitle}>About Money for Minors</h1>
      <div className={s.wrapper}>
        <div className={s.noteBlock}>
          <h3 className={s.contentHeading}>Attention!</h3>
          <p className={s.contentPara}>
            This site is very young, so the amount of content is very limited, I
            will be updating it regularly and I have also opened the floor to
            suggestions so that others can chime in with their advice. The most
            relevant suggestions will be shown on the site with credit. Contact
            us with your suggestions or anything else{" "}
            <Link className={s.noteLink} to="/contact">
              here.
            </Link>
          </p>
        </div>
        <div className={s.contentBlock}>
          <h3 className={s.contentHeading}>About Us</h3>
          <p className={s.contentPara}>
            hey, glad to have you here. My name is Asam and I founded this site
            in an effort to help young people and their parents navigate the
            tricky world of personal finance.
          </p>
          <p className={s.contentPara}>
            I managed to get myself in a world of hurt in my younger years and
            by the time I was at my early twenties I was saddled with debt.
            Education on credit, money and debt is close to non existent for
            young people imo and that is a real shame. Overcoming financial
            trouble is very difficult and can take a long time, so the best
            option is to arm yourself with as much information as possible and
            make good choices right off the bat.
          </p>
          <p className={s.contentPara}>
            First off I want to let you know, I am no financial advisor and the
            advice you find on this site is going to reflect that. I am not in a
            position to offer investment advice of any kind.
          </p>
          <p className={s.contentPara}>
            What I can do is offer simple, no frills advice to help get you on
            the right path in the world of personal finance. This site will
            serve more as a kick up the ar*e for you to do your own research and
            in some cases seek out the right professional advice in terms of
            where to go next.
          </p>
          <p className={s.contentPara}>
            I would love your thoughts, feedback and suggestions on the site.
            Hit me up with any advice you would like to share or feature
            requests{" "}
            <Link className={s.aboutLink} to="/contact">
              here.
            </Link>
          </p>
        </div>
      </div>
    </StandardLayout>
  );
};
