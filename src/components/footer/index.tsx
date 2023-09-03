/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { socialMedia } from "./constant";
import styles from "./styles.module.scss";

export default function Footer(): React.ReactElement {
  return (
    <div>
      <div className={styles.footerblock}>
        <div className={styles.footerwrapper}>
          <div className={styles.information}>
            <div className={styles.footerleft}>
              <div className={styles.title}>BURGER KING® DELIVERY</div>
              <div className={styles.phone}>
                <a href="tel:1500025">
                  <img
                    src="https://bkdelivery.co.id/static/website/img/Footer-Phone1x.4bb5b96c80cd.png"
                    srcSet="
                    https://bkdelivery.co.id/static/website/img/Footer-Phone1x.4bb5b96c80cd.png,
                    https://bkdelivery.co.id/static/website/img/Footer-Phone2x.918a358b086f.png 2x
                  "
                  />
                  15000 25
                </a>
                <a
                  href="mailto:guestservice@burgerking.co.id"
                  className={styles.emailfooter}
                >
                  <img
                    src="https://bkdelivery.co.id/static/website/img/footer-email1x.0dc312afa145.png"
                    srcSet="
                    https://bkdelivery.co.id/static/website/img/footer-email1x.0dc312afa145.png,
                    https://bkdelivery.co.id/static/website/img/footer-email2x.6866b6e7b141.png 2x
                  "
                  />
                  <span>guestservice@burgerking.co.id</span>
                </a>

                <span className={styles.socialmedia}>
                  {socialMedia.map((v) => (
                    <a key={v.href} href={v.href} target="_blank">
                      <img src={v.img} srcSet={v.srcSet} />
                    </a>
                  ))}
                </span>
              </div>
            </div>
            <div className={styles.footerright}></div>
          </div>
          <div className={styles.clear}></div>
          <div className={styles.termsconditions}>
            <span className={styles.rightline}>
              <a href="/about-us/">About Us</a>
            </span>
            <span className={styles.rightline}>
              <a href="/privacy-policy/">Kebijakan Privasi</a>
            </span>
            <span className={styles.rightline}>
              <a href="/terms-and-conditions/">Syarat dan Ketentuan</a>
            </span>
            <span className={styles.copyright}>
              TM &amp; © 2023 Burger King Corporation. Used Under License. All
              rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
