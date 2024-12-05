import { FunctionComponent } from "react";
import Back from "../components/Back";
import Container2 from "../components/Container2";
import GloablNav from "../components/GloablNav";
import styles from "./MortgageScreen3Final.module.css";

const MortgageScreen3Final: FunctionComponent = () => {
  return (
    <div className={styles.mortgageScreen3Final}>
      <main className={styles.container}>
        <GloablNav className={styles.gloablNav} logo="/logo.svg" />
        <section className={styles.main}>
          <Back
            iconRight={false}
            text="Back"
            sVG="/svg-2.svg"
            sVG1="/svg21.svg"
          />
          <Container2 />
          <div className={styles.backParent}>
            <Back iconRight text="Back" sVG="/svg-2.svg" sVG1="/svg21.svg" />
            <div className={styles.button}>
              <div className={styles.continue}>Continue</div>
              <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
            </div>
          </div>
        </section>
      </main>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>Legal information</div>
        <div className={styles.footerLinks}>Accessibility and disability</div>
        <div className={styles.footerLinks}>Cookies</div>
        <div className={styles.footerLinks}>Privacy</div>
        <div className={styles.footerLinks}>Sitemap</div>
      </div>
    </div>
  );
};

export default MortgageScreen3Final;
