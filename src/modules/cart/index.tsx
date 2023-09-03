/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Delivery from "./delivery";
import Preview from "./preview";
import Payment from "./payment";
import { useRouter } from "next/router";

export default function Cart(): React.ReactElement {
  const [step, setStep] = useState<string>("preview");

  const router = useRouter();

  useEffect(() => {
    const setpParam = router.query.step?.toString();
    if (setpParam) {
      setStep(setpParam)
    }
  }, [router])
  
  return (
    <div className={`${styles.cart_wrapper} ${styles.cart_preview}`}>
      <div className={styles.contentblock}>
        <div className={styles.contentwrapper}>
          <div className={styles.step_sections}>
            <a
              role="button"
              onClick={() => setStep("preview")}
              className={`${styles.step} ${step === "preview" || step === "delivery" || step === "payment" ? styles.active : ""}`}
            >
              <span>1</span> <strong className={styles.text}>Cart</strong>
            </a>
            <a role="button" onClick={() => setStep("delivery")} className={`${styles.step} ${step === "delivery" || step === "payment" ? styles.active : ""}`}>
              <span>2</span>{" "}
              <strong className={styles.text}>
                Delivery <strong className={styles.dekstop}>Info</strong>
              </strong>
            </a>
            <a role="button" className={`${styles.step} ${step === "payment" ? styles.active : ""}`}>
              <span>3</span> <strong className={styles.text}>Payment</strong>
            </a>
          </div>
          <div className={styles.clear}></div>
          {step === "preview" && <Preview />}
          {step === "delivery" && <Delivery /> }
          {step === "payment" && <Payment />}
        </div>
      </div>
    </div>
  );
}
