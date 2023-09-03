/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./style.module.scss";

export default function News() {
  return (
    <div className={styles.promotion}>
      <div className={styles.contentblock}>
        <div className={styles.contentwrapper}>
          <a href="/menus?menu=September Ceria 9.9">
            <div className={styles.promotionimagewrapper}>
              <img
                src="https://bkdelivery.co.id/media/landscape_image/2023/9/1/ptxtxnbpgkbmnvcb3qdq8l.jpg"
                alt="September Ceria"
              />
            </div>
          </a>

          <a href="/menus?menu=September Ceria 9.9">
            <div className={styles.promotionimagewrapper}>
              <img
                src="https://bkdelivery.co.id/media/landscape_image/2023/7/24/fr5p7hv8bd7hsnt7ma329o.jpg"
                alt="PROMO BK APP DISKON 30%"
              />
            </div>
          </a>

          <a href="/menus?menu=September Ceria 9.9">
            <div className={styles.promotionimagewrapper}>
              <img
                src="https://bkdelivery.co.id/media/landscape_image/2023/7/24/dhbrwkgk6yfchjmxjcwmuv.jpg"
                alt="Cheeseburger 10K"
              />
            </div>
          </a>

          <a href="/menus?menu=September Ceria 9.9">
            <div className={styles.promotionimagewrapper}>
              <img
                src="https://bkdelivery.co.id/media/landscape_image/2023/4/19/6qasxyu9lyrltgr3gzkysf.jpg"
                alt="Begadang Kenyang"
              />
            </div>
          </a>

          <a href="/menus?menu=September Ceria 9.9">
            <div className={styles.promotionimagewrapper}>
              <img
                src="https://bkdelivery.co.id/media/landscape_image/2023/1/18/mez28xqf8xytdfzprxx2an.jpg"
                alt="Birthday Voucher"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
