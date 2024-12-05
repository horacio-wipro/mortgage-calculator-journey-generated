import { FunctionComponent } from "react";
import Button from "../components/Button";
import FormQuestion from "../components/FormQuestion";
import GloablNav from "../components/GloablNav";
import TitleAndContent from "../components/TitleAndContent";
import styles from "./MortgageScreen1Final.module.css";

const MortgageScreen1Final: FunctionComponent = () => {
  return (
    <div className={styles.mortgageScreen1Final}>
      <main className={styles.screen}>
        <GloablNav className={styles.gloablNav} logo="/logo.svg" />
        <section className={styles.screenInner}>
          <div className={styles.containerParent}>
            <div className={styles.container}>
              <TitleAndContent
                className={styles.titleandcontent}
                content="Already have a Lloyds Bank mortgage and want to switch your product or borrow more?  Please visit our Existing customer tools."
                headerText="Mortgage Calculator"
                title="Let's get started..."
                secondaryContent="Already have a Lloyds Bank mortgage and want to move home? Please select ‘I want to buy a home’."
              />
            </div>
            <div className={styles.existingMortgageMessage}>
              <div className={styles.mortgageForm}>
                <FormQuestion
                  className={styles.formquestion}
                  questions={[
                    "I want to buy a home",
                    "Move my mortgage to Lloyds Bank",
                    "Discuss Buy to Let mortgages",
                  ]}
                  error="Let us know if you are employed"
                  question="Firstly, what would you like to do?"
                />
                <div className={styles.privacyInfo}>
                  <div
                    className={styles.forHowWe}
                  >{`For how we use your personal information read our `}</div>
                  <div className={styles.fullPrivacyNotice}>
                    Full Privacy Notice.
                  </div>
                </div>
              </div>
              <div className={styles.continueButton}>
                <Button
                  className={styles.button}
                  chevron="/chevron.svg"
                  property1="Default"
                  text="Continue"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>Legal information</div>
        <div className={styles.footerLinks}>Accessibility and disability</div>
        <div className={styles.footerLinks}>Cookies</div>
        <a className={styles.footerLinks3}>Privacy</a>
        <div className={styles.footerLinks}>Sitemap</div>
      </div>
    </div>
  );
};

export default MortgageScreen1Final;
