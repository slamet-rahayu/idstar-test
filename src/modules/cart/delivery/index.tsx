/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./style.module.scss";

export default function Delivery(): React.ReactElement {
  return (
    <div className={styles.delivery}>
      <div className={styles.cartcontent}>
        <form method="POST" action="">
          <div className={styles.left}>
            <h2>GUEST DETAILS</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              id="id_name"
            />
            <div className={styles.phone}>
              <span className={styles.code}>+62</span>
              <input
                type="text"
                name="mobile_number"
                placeholder="Mobile Number"
                required
                id="id_mobile_number"
              />
            </div>
          </div>
          <div className={styles.right}>
            <h1>Lokasi Pengantaran</h1>

            <h2>1. Set Lokasi Pengantaran di Peta</h2>
            <p className={styles.note}>
              Pastikan pin lokasi sudah sesuai dengan lokasi pengantaran
            </p>
            <input
              type="text"
              value=""
              id="search-address"
              className={`${styles.searchaddress} ${styles.pactargetinput}`}
              placeholder="Search for location or address..."
            />
            <div className={styles.mapwrapper}>
              <div className={styles.marker}>
                <img
                  src="/static/website/img/Map-pointer-1x.a126567ce1a5.png"
                  srcSet="/static/website/img/Map-pointer-1x.a126567ce1a5.png,
                          /static/website/img/Map-pointer-2x.0fb23a459ad0.png 2x"
                  alt=""
                />
              </div>
            </div>
            <h2>2. Berikan Alamat Lengkap</h2>
            <p className={styles.note}>
              Tambahkan catatan atau acuan jika perlu (contoh: &quot;di sebelah
              salon&quot;)
            </p>
            <textarea
              name="address"
              cols={40}
              rows={4}
              placeholder="Mohon set lokasi pengantaran di peta sebelum mengisi alamat pengantaran"
              maxLength={300}
              required
              id="id_address"
            ></textarea>
            <input type="hidden" id="id_latitude" name="latitude" value="" />
            <input type="hidden" id="id_longitude" name="longitude" value="" />
            <div className={styles.clear}></div>
            <a href="/cart?step=payment" style={{ width: "100%" }} className={styles.button}>Continue</a>
          </div>
        </form>
      </div>
    </div>
  );
}
