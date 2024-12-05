import { FunctionComponent } from "react";
import Alert1 from "../components/Alert1";
import NumericInput from "../components/NumericInput";
import Selection1 from "../components/Selection1";
import styles from "./Container2.module.css";

export type Container2Type = {
  className?: string;
};

const Container2: FunctionComponent<Container2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.titleandcontent}>
        <div className={styles.strongMortgage}>Mortgage Calculator</div>
        <h1 className={styles.heading1}>Your income</h1>
      </div>
      <div className={styles.formquestion}>
        <b className={styles.headingFirstly}>
          In your main job, are you employed or self-employed?
        </b>
        <Alert1
          className={styles.alert}
          text="Let us know if you're employed or self-employed."
        />
        <div className={styles.selection}>
          <Selection1 className={styles.selection1} text="Employed" />
          <Selection1 className={styles.selection1} text="Self-employed" />
        </div>
      </div>
      <div className={styles.formquestion1}>
        <b className={styles.strongMortgage}>
          How much do you earn each year, before tax?
        </b>
        <div className={styles.headingFirstly2}>
          If so, please tell us your yearly bonus amount before tax.
        </div>
        <Alert1 className={styles.alert} text="Let us know your income." />
        <NumericInput
          property1="Default"
          numericInputHeight="unset"
          selectionDisplay="flex"
          selectionHeight="24px"
          selectionAlignItems="center"
          selectionMinWidth="187px"
          selectionPadding="0"
          numericInputAlignSelf="stretch"
        />
      </div>
      <div className={styles.formquestion2}>
        <b className={styles.headingFirstly}>
          Do you have any additional income?
        </b>
        <div className={styles.thisCouldBeContainer}>
          <p className={styles.thisCouldBe}>
            This could be income from a second or part-time job, property,
            pensions, bonuses, overtime, commission or any benefits and
            allowances
          </p>
          <p className={styles.thisCouldBe}>
            you receive from the government or your employer.
          </p>
        </div>
        <Alert1
          className={styles.alert}
          text="Let us know if you have any additional income."
        />
        <div className={styles.selection3}>
          <Selection1 className={styles.selection4} text="Yes" />
          <Selection1 className={styles.selection4} text="No" />
        </div>
      </div>
      <div className={styles.formquestion1}>
        <b className={styles.strongMortgage}>Are you paid any bonuses?</b>
        <div className={styles.headingFirstly5}>
          If so, please tell us your yearly bonus amount before tax.
        </div>
        <Alert1 className={styles.alert3} text="Let us know your income." />
        <NumericInput
          property1="Default"
          numericInputHeight="unset"
          selectionDisplay="flex"
          selectionHeight="24px"
          selectionAlignItems="center"
          selectionMinWidth="221px"
          selectionPadding="0"
          numericInputAlignSelf="stretch"
        />
      </div>
      <div className={styles.formquestion1}>
        <b className={styles.strongMortgage}>Are you paid any commission?</b>
        <div className={styles.headingFirstly5}>
          If so, please tell us your yearly bonus amount before tax.
        </div>
        <Alert1 className={styles.alert3} text="Let us know your income." />
        <NumericInput
          property1="Default"
          numericInputHeight="unset"
          selectionDisplay="flex"
          selectionHeight="24px"
          selectionAlignItems="center"
          selectionMinWidth="221px"
          selectionPadding="0"
          numericInputAlignSelf="stretch"
        />
      </div>
      <div className={styles.formquestion5}>
        <b className={styles.strongMortgage}>Are you paid overtime?</b>
        <div className={styles.headingFirstly9}>
          If so, please tell us your yearly overtime amount before tax. If your
          overtime isn't always the same, please tell us the average amount
          received over the year.
        </div>
        <Alert1 className={styles.alert5} text="Let us know your income." />
        <NumericInput
          property1="Default"
          numericInputHeight="unset"
          selectionDisplay="flex"
          selectionHeight="24px"
          selectionAlignItems="center"
          selectionMinWidth="250px"
          selectionPadding="0"
          numericInputAlignSelf="stretch"
        />
      </div>
      <div className={styles.formquestion5}>
        <b className={styles.headingFirstly10}>
          Apart from the payments you’ve just told us about, are you paid any
          other money?
        </b>
        <div className={styles.headingFirstly9}>
          If so, please tell us the total yearly amount of other payments before
          tax. If your payments aren’t always the same, please tell us the
          average amount received over the year.
        </div>
        <Alert1 className={styles.alert5} text="Let us know your income." />
        <NumericInput
          property1="Default"
          numericInputHeight="unset"
          selectionDisplay="flex"
          selectionHeight="24px"
          selectionAlignItems="center"
          selectionMinWidth="250px"
          selectionPadding="0"
          numericInputAlignSelf="stretch"
        />
      </div>
    </div>
  );
};

export default Container2;
