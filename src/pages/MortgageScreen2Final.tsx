import { FunctionComponent } from "react";
import GloablNav from "../components/GloablNav";
import TitleAndContent from "../components/TitleAndContent";
import FormQuestion from "../components/FormQuestion";
import Button from "../components/Button";
import AlertBox from "../components/AlertBox";
import Footer from "../components/Footer";
import styles from "./MortgageScreen2Final.module.css";

const MortgageScreen2Final: FunctionComponent = () => {
  return (
    <div className={styles.mortgageScreen2Final}>
      <section className={styles.container}>
        <GloablNav className={styles.gloablNav} logo="/logo.svg" />
        <div className={styles.mainParent}>
          <div className={styles.main}>
            <div className={styles.container1}>
              <TitleAndContent
                className={styles.titleandcontent}
                content="Find out what you could borrow and how much it might cost in just a couple of minutes."
                title="Mortgage Calculator"
                secondaryContent="We can help you understand how much you can afford to borrow, and your interest rate and monthly payment costs."
              />
              <FormQuestion
                className={styles.gloablNav}
                isHorizontal
                questions={[
                  "See how much I could borrow",
                  "See mortgage rates and costs",
                  "Both",
                ]}
                error="Tell us what you would like to find out."
              />
            </div>
            <Button
              className={styles.button}
              chevron="https://d1xzdqg8s8ggsr.cloudfront.net/2nshCpwTDuJzEeiStSS3PUUTOG6/0ce174ac-7331-4b69-8ec0-60092020bccb_1732544667835718175?Expires=-62135596800&Signature=GYFFYvlyPh6KadKubQikheSm7hrSbXaDy6B3jUah5dwlG3pAXLRVS-kSeR~sLGHkQUSSYG8w1Y4wURQSIF5AEnc4-HsLHnLHE2iDCQ10SMNp4NPpniMym~ZZ9knhTA83-NWLX-I-7J33DQMIiyjxFOLaqQrNyqHBB9tcSUdTuEPtJx8v25~jibPmOROemlTwFhU47nGLsm8dEGXyVW4gnMJe26ixqWkL02UsPZcqNOFEJW~VZWP60KpNSMbSdQtjHPGLKoOEtmH-hDKSn1hWi6KJgGkmtzSTHtiTP68d4hW6viaEs6zKef6C1PvhDCudFn3KQ0mylF3l~68HKtVF1A__&Key-Pair-Id=K1P54FZWCHCL6J"
              property1="Default"
              text="Continue"
            />
          </div>
          <AlertBox
            className={styles.alertbox}
            primaryContent="The first step towards buying your home is getting an Agreement in Principle (AIP)."
            tertiaryContent="It should take around 15 mins to complete."
            icon="/svg-4.svg"
            secondaryContent="This will give you an idea of how much you could borrow before you apply for a mortgage with no impact to your credit score."
            heading="Already done your sums?"
          />
        </div>
      </section>
      <Footer className={styles.gloablNav} />
    </div>
  );
};

export default MortgageScreen2Final;
