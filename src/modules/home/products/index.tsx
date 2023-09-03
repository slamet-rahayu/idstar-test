/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { products } from "./constant";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Products(): React.ReactElement {
  return (
    <div className={styles.index}>
      <div className={styles.contentblock}>
        <div className={styles.contentwrapper}>
          <div className={styles.crownsectionindex}>
            <div className={styles.crowncontent}>
              <div className={styles.customercrown}>
                <h3 className={styles.logintext}>
                  Get exclusive benefits now as a BK Member!
                  <span>
                    <img
                      className={styles.crownintext}
                      src="https://bkdelivery.co.id/static/website/img/crown1x.4a9100c3c538.png"
                      srcSet="
                      https://bkdelivery.co.id/static/website/img/crown1x.4a9100c3c538.png 1x,
                      https://bkdelivery.co.id/static/website/img/crown2x.e2843cfb45cf.png 2x
                    "
                    />
                  </span>
                </h3>
              </div>
              <div className={styles.loginsection}>
                <a href="/accounts/login" className={styles.loginbutton}>
                  {" "}
                  LOGIN{" "}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.wonderfulmenus}>
            <h2>Our Menus</h2>
          </div>
          <div className={styles.clear}></div>
          <div className={`${styles.columns} ${styles.menuboxwrapper}`}>
            {products.map((v) => (
              <div
                className={`${styles.threecolumn} ${styles.menubox}`}
                key={v.title}
              >
                <Link href={`/menus?menu=${v.title}`}>
                  <div className={styles.imagewrapper}>
                    <img src={v.img} alt={v.title} />
                  </div>
                  <div className={`${styles.columns} ${styles.wonderfulmenus}`}>
                    <div className={styles.twocolumn}>
                      <h3 className={styles.title}>{v.title}</h3>
                    </div>
                    <div className={styles.twocolumn}>
                      <button
                        className={`${styles.button} ${styles.buttonadd}`}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            <div className={`${styles.threecolumn} ${styles.menubox}`}>
              <a href="/menus/upsell-3/">
                <div className={styles.imagewrapper}></div>
                <div className={`${styles.columns} ${styles.wonderfulmenus}`}>
                  <div className={styles.twocolumn}>
                    <h3 className={styles.title}>Upsell</h3>
                  </div>
                  <div className={styles.twocolumn}>
                    <button className={`${styles.button} ${styles.buttonadd}`}>
                      Order
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.clear}></div>
        </div>
      </div>
    </div>
  );
}
