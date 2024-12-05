import { FunctionComponent, useCallback } from "react";
import Button from "../components/Button";
import Headermargin from "../components/Headermargin";
import FrameComponent from "../components/FrameComponent";
import Container from "../components/Container";
import styles from "./MortgageScreen5Final.module.css";

const MortgageScreen5Final: FunctionComponent = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.lloydsbank.com/legal.html");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.lloydsbank.com/help-guidance/accessibility.html");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.lloydsbank.com/cookies.html");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open(
      "https://www.lloydsbank.com/help-guidance/privacy-explained/data-privacy-notice.html"
    );
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.lloydsbank.com/sitemap.html");
  }, []);

  return (
    <div className={styles.mortgageScreen5Final}>
      <Headermargin />
      <main className={styles.mainWrapper}>
        <section className={styles.main}>
          <FrameComponent />
          <div className={styles.separatorWrapper}>
            <div className={styles.separator} />
          </div>
          <Container />
          <div className={styles.containerParent}>
            <div className={styles.container}>
              <div className={styles.containerGroup}>
                <div className={styles.container1}>
                  <div className={styles.container2}>
                    <div className={styles.heading}>
                      <div className={styles.yourNextStep}>Your next step</div>
                    </div>
                  </div>
                </div>
                <div className={styles.background}>
                  <Button
                    className={styles.button}
                    property1="Default"
                    text="Go to Agreement in Principle"
                    showIcon={false}
                  />
                </div>
              </div>
              <div className={styles.containerInner}>
                <div className={styles.backgroundParent}>
                  <div className={styles.background1}>
                    <div className={styles.heading}>
                      <div className={styles.yourNextStep}>
                        Start your mortgage journey
                      </div>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.item}>
                        <div className={styles.saveToYour}>
                          Save to your personalised dashboard.
                        </div>
                        <div className={styles.container3}>
                          <div className={styles.container4}>
                            <img
                              className={styles.svgIcon}
                              alt=""
                              src="/svg-6.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.item1}>
                        <div className={styles.saveToYour}>
                          Simple to use, step by step mortgage guide.
                        </div>
                        <div className={styles.container3}>
                          <div className={styles.container4}>
                            <img
                              className={styles.svgIcon}
                              alt=""
                              src="/svg-6.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.item1}>
                        <div className={styles.saveToYour}>
                          Keep track of your progress all in one place.
                        </div>
                        <div className={styles.container3}>
                          <div className={styles.container4}>
                            <img
                              className={styles.svgIcon}
                              alt=""
                              src="/svg-6.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.imageIcon}
                      loading="lazy"
                      alt=""
                      src="/image@2x.png"
                    />
                  </div>
                  <div className={styles.background2}>
                    <Button
                      className={styles.button1}
                      chevron="/chevron.svg"
                      property1="Secondary"
                      text="Continue"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container9}>
              <div className={styles.container10}>
                <div className={styles.backgroundborder}>
                  <div className={styles.svgParent}>
                    <img className={styles.svgIcon3} alt="" src="/svg-9.svg" />
                    <div className={styles.otherCostsToContainer}>
                      <span>
                        <p className={styles.otherCostsTo}>
                          Other costs to think
                        </p>
                        <p className={styles.otherCostsTo}>about</p>
                      </span>
                    </div>
                  </div>
                  <div className={styles.stampDutyParent}>
                    <div className={styles.stampDuty}>Stamp Duty</div>
                    <b className={styles.b}>£0</b>
                    <div className={styles.howWeWorked}>
                      How we worked this out
                    </div>
                  </div>
                  <div className={styles.legalFeesParent}>
                    <div className={styles.legalFees}>Legal fees</div>
                    <b className={styles.b1}>£1,430</b>
                    <div className={styles.howWeWorked1}>
                      How we worked this out
                    </div>
                  </div>
                  <div className={styles.valuationFeeParent}>
                    <div className={styles.valuationFee}>Valuation fee</div>
                    <b className={styles.b2}>£0</b>
                  </div>
                  <div className={styles.separatorContainer}>
                    <div className={styles.separator} />
                  </div>
                  <div className={styles.thatWorksOutAtAroundParent}>
                    <div className={styles.valuationFee}>
                      That works out at around
                    </div>
                    <b className={styles.b3}>£1,430</b>
                  </div>
                </div>
              </div>
              <div className={styles.container11}>
                <div className={styles.backgroundborder1}>
                  <div className={styles.heading}>
                    <div className={styles.yourNextStep}>Useful info</div>
                  </div>
                  <div className={styles.link}>
                    <div className={styles.mortgageSupportAnd}>
                      Mortgage support and guidance
                    </div>
                  </div>
                  <div className={styles.container12}>
                    <b className={styles.saveToYour}>
                      <p className={styles.otherCostsTo}>
                        You could lose your home if you don’t keep
                      </p>
                      <p className={styles.otherCostsTo}>
                        up your mortgage repayments.
                      </p>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.footermargin}>
        <div className={styles.footer}>
          <div className={styles.container13}>
            <div className={styles.list1}>
              <div className={styles.listitemmargin}>
                <div className={styles.thatWorksOutAtAroundParent}>
                  <div className={styles.link1} onClick={onLinkContainerClick}>
                    <a
                      className={styles.legalInformation}
                      href="https://www.lloydsbank.com/legal.html"
                      target="_blank"
                    >
                      Legal information
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.listitemmargin1}>
                <div className={styles.thatWorksOutAtAroundParent}>
                  <div className={styles.link1} onClick={onLinkContainerClick1}>
                    <a
                      className={styles.legalInformation}
                      href="https://www.lloydsbank.com/help-guidance/accessibility.html"
                      target="_blank"
                    >
                      Accessibility and disability
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.listitemmargin2}>
                <div className={styles.thatWorksOutAtAroundParent}>
                  <div className={styles.link1} onClick={onLinkContainerClick2}>
                    <a
                      className={styles.cookies}
                      href="https://www.lloydsbank.com/cookies.html"
                      target="_blank"
                    >
                      Cookies
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.listitemmargin3}>
                <div className={styles.thatWorksOutAtAroundParent}>
                  <div className={styles.link1} onClick={onLinkContainerClick3}>
                    <a
                      className={styles.cookies}
                      href="https://www.lloydsbank.com/help-guidance/privacy-explained/data-privacy-notice.html"
                      target="_blank"
                    >
                      Privacy
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.listitemmargin4}>
                <div className={styles.thatWorksOutAtAroundParent}>
                  <div className={styles.link1} onClick={onLinkContainerClick4}>
                    <a
                      className={styles.cookies}
                      href="https://www.lloydsbank.com/sitemap.html"
                      target="_blank"
                    >
                      Sitemap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageScreen5Final;
