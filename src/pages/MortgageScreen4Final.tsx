import { FunctionComponent } from "react";
import Back from "../components/Back";
import Footer from "../components/Footer";
import FormQuestion from "../components/FormQuestion";
import GloablNav from "../components/GloablNav";
import TitleAndContent from "../components/TitleAndContent";
import styles from "./MortgageScreen4Final.module.css";

const MortgageScreen4Final: FunctionComponent = () => {
  return (
    <div className={styles.mortgageScreen4Final}>
      <main className={styles.container}>
        <GloablNav className={styles.gloablNav} logo="/logo.svg" />
        <section className={styles.main}>
          <Back
            iconRight={false}
            text="Back"
            sVG="/svg-2.svg"
            sVG1="/svg21.svg"
          />
          <div className={styles.container1}>
            <TitleAndContent
              className={styles.titleandcontent}
              headerText="Mortgage Calculator"
              title="Your outgoings"
            />
            <FormQuestion
              className={styles.formquestion}
              isHorizontal={true}
              questions={["0", "1", "2", "3 or more"]}
              error="Let us know how many people rely on your income."
              question="How many people rely on your income?"
              explanation="These can be children or adults of any age"
            />
            <FormQuestion
              className={styles.formquestion1}
              isNumberInput
              question="Do you have any credit card balances?"
              explanation="If so, please tell us the total amount outstanding."
            />
            <FormQuestion
              className={styles.formquestion1}
              isNumberInput
              questions={[]}
              error="Let us know if you have any additional income."
              question="Do you have any loans you pay back monthly?"
              explanation="If so, please tell us the total amount you pay each month."
            />
            <FormQuestion
              className={styles.formquestion3}
              isNumberInput
              question="Do you have any other monthly expenses?"
              explanation="If so, please tell us how much you pay each month for things like childcare costs, electrical items, or furniture."
            />
          </div>
          <div className={styles.backParent}>
            <Back
              iconRight={false}
              text="Back"
              sVG="/svg-2.svg"
              sVG1="/svg21.svg"
            />
            <div className={styles.button}>
              <div className={styles.continue}>Continue</div>
              <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
            </div>
          </div>
        </section>
      </main>
      <Footer className={styles.gloablNav} />
    </div>
  );
};

export default MortgageScreen4Final;
