import { FunctionComponent } from "react";
import styles from "./Headermargin.module.css";

export type HeadermarginType = {
  className?: string;
};

const Headermargin: FunctionComponent<HeadermarginType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headermargin, className].join(" ")}>
      <div className={styles.header}>
        <header className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.margin}>
              <div className={styles.container2}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg2.svg"
                />
              </div>
            </div>
            <div className={styles.container3}>
              <div className={styles.container4}>
                <div className={styles.container2}>
                  <div className={styles.container6}>
                    <a className={styles.safeSecure}>{`Safe & Secure`}</a>
                  </div>
                  <div className={styles.margin1}>
                    <div className={styles.container7}>
                      <div className={styles.container8}>
                        <img
                          className={styles.svgIcon1}
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Headermargin;
