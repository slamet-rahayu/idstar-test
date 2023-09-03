/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from './style.module.scss';
import { useRouter } from "next/router";

export default function Payment() {
  const router = useRouter()
  const order = () => {
    localStorage.clear();
    router.replace('/')
  }
  return (
    <div className={`${styles.cart_wrapper} ${styles.payment}`}>
      <div className={`${styles.cartcontent} ${styles.columns}`}>
        <div id="item-section" className={`${styles.twocolumn} ${styles.borderright}`}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.header}>
                <th colSpan={3}>Order Summary</th>
              </tr>

              <tr>
                <td className={styles.description}>9.9 Fanta Float Regular</td>
                <td className={styles.quantity}>x 1</td>
                <td className={styles.textalignright}>Rp. 9,999</td>
              </tr>

              <tr>
                <td className={styles.description}>
                  Tenderscrisp Steakhouse Burger Large Meal
                  <br />
                  Drink: Coca-cola
                  <br />
                  2 x Whooper patty
                  <br />
                  1 x Amerian Cheese
                  <br />1 x Mushroom Sauce
                </td>
                <td className={styles.quantity}>x 1</td>
                <td className={styles.textalignright}>Rp. 80.000</td>
              </tr>
              <tr>
                <td className={styles.description}>
                  Tenderscrisp Steakhouse Burger Large Meal
                  <span className={styles.note}>Ayamnya apa aja</span>
                </td>
                <td className={styles.quantity}>x 1</td>
                <td className={styles.textalignright}>Rp. 80.000</td>
              </tr>
              <tr>
                <td className={styles.description}>
                  Tenderscrisp Steakhouse Burger Large Meal
                  <span className={styles.note}>Ayamnya apa aja</span>
                </td>
                <td className={styles.quantity}>x 1</td>
                <td className={styles.textalignright}>Rp. 80.000</td>
              </tr>
            </tbody>
          </table>
          <table className={`${styles.table} ${styles.summary}`}>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td className={styles.textalignright}>9,999</td>
              </tr>
              <tr>
                <td>Delivery fee</td>
                <td className={styles.textalignright}>8,000</td>
              </tr>
              <tr>
                <td>PB1 10%</td>
                <td className={styles.textalignright}>2,254</td>
              </tr>

              <tr>
                <td>Delivery Surcharge</td>
                <td className={styles.textalignright}>4,545</td>
              </tr>

              <tr className={styles.grandtotal}>
                <td>TOTAL</td>
                <td className={styles.textalignright}>
                  Rp. <span className={styles.number}>24,798</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.twocolumn}>
          <h2>Deliver To</h2>
          <p>
            Jl. Bawah Rel No.13, Gambir, Central Jakarta City, Jakarta 10110,
            Indonesia
          </p>

          <form
            id="submit-form"
            action="/cart/submit"
            method="post"
            className={styles.method}
          >
            <div className={`${styles.amount} ${styles.payment_block}`}>
              <div className={styles.promotion_code}>
                <div className={`${styles.promocodeapplied} ${styles.hide}`}>
                  <img
                    src="https://bkdelivery.co.id/static/website/img/PromoCode-icon.4c4aa1a0dd8e.svg"
                    alt=""
                  />
                  <span id="promo-code-applied"></span>
                  <a
                    href="#"
                    id="remove-promotion-code"
                    className={styles.trashicon}
                  >
                    <img
                      src="https://bkdelivery.co.id/static/website/img/cart-remove1x.2d89a8db571c.png"
                      srcSet="https://bkdelivery.co.id/static/website/img/cart-remove1x.2d89a8db571c.png,
                              https://bkdelivery.co.id/static/website/img/cart-remove2x.13ccd74dddd8.png 2x"
                      alt=""
                    />
                  </a>
                </div>
                <div className={styles.nopromocode}>
                  <div className={`${styles.loadingpromo} ${styles.hide}`}>
                    <img
                      src="/static/website/img/BKLoading.9b5a6929e3c1.gif"
                      alt=""
                    />
                  </div>
                  <a
                    href="#"
                    className={`${styles.modalopen} ${styles.applypromotion}`}
                    data-modal="modal-coupons"
                  >
                    Apply Kupon / Promo Code
                  </a>
                </div>
              </div>
              <div className={styles.grandtotal_wrapper}>
                <div id="final-price" className={`${styles.grandtotal} ${styles.final}`}>
                  Rp. <span className={styles.number}>24,798</span>
                </div>
              </div>
            </div>
            <div className={styles.promoinfo}></div>

            <div className={styles.amount} id="payment-method-layout">
              <h2>Pay With</h2>
              <div className={styles.choices}>
                <div className={styles.list}>
                  <input type="radio" id="dana" value="5" name="method" />
                  <label className={styles.choice} htmlFor="dana">
                    <img
                      src="https://bkdelivery.co.id/static/website/img/tick-orange1x.ca55a4d92e3f.png"
                      className={styles.tickorange}
                      srcSet="https://bkdelivery.co.id/static/website/img/tick-orange1x.ca55a4d92e3f.png,
                              https://bkdelivery.co.id/static/website/img/tick-orange2x.cba8b404d905.png 2x"
                      alt=""
                    />
                    <img
                      src="https://bkdelivery.co.id/static/website/img/DANA-logo1x.6fb8c465dc9f.png"
                      className={styles.paymentlogo}
                      srcSet="https://bkdelivery.co.id/static/website/img/DANA-logo1x.6fb8c465dc9f.png,
                              https://bkdelivery.co.id/static/website/img/DANA-logo2x.75d886367436.png 2x"
                      alt=""
                    />
                  </label>
                </div>

                <div className={styles.list}>
                  <input type="radio" id="ovo" value="6" name="method" />
                  <label className={styles.choice} htmlFor="ovo">
                    <img
                      src="https://bkdelivery.co.id/static/website/img/tick-orange1x.ca55a4d92e3f.png"
                      className={styles.tickorange}
                      srcSet="https://bkdelivery.co.id/static/website/img/tick-orange1x.ca55a4d92e3f.png,
                              https://bkdelivery.co.id/static/website/img/tick-orange2x.cba8b404d905.png 2x"
                      alt=""
                    />
                    <img
                      src="https://bkdelivery.co.id/static/website/img/OVO.e12152c36de0.png"
                      className={styles.ovopaymentlogo}
                      srcSet="https://bkdelivery.co.id/static/website/img/OVO.e12152c36de0.png,
                              https://bkdelivery.co.id/static/website/img/OVO.e12152c36de0.png 2x"
                      alt=""
                    />
                  </label>
                </div>

                <div className={styles.list}>
                  <input type="radio" id="gopay" value="2" name="method" />
                  <label className={styles.choice} htmlFor="gopay">
                    <img
                      src="https://bkdelivery.co.id/static/website/img/tick-orange1x.ca55a4d92e3f.png"
                      className={styles.tickorange}
                      srcSet="https://bkdelivery.co.id/static/website/img/tick-orange1x.ca55a4d92e3f.png,
                              https://bkdelivery.co.id/static/website/img/tick-orange2x.cba8b404d905.png 2x"
                      alt=""
                    />
                    <img
                      src="https://bkdelivery.co.id/static/website/img/gopay.f42e2033836e.png"
                      className={styles.ovopaymentlogo}
                      srcSet="https://bkdelivery.co.id/static/website/img/gopay.f42e2033836e.png,
                              https://bkdelivery.co.id/static/website/img/gopay.f42e2033836e.png 2x"
                      alt=""
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className={`${styles.phonenumber} ${styles.hide}`}>
              <h2>Your OVO Mobile Number</h2>
              <div className={styles.inputphonecode}>
                <span className={styles.code}>+62</span>
                <input
                  type="tel"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  value=""
                  id="id_mobile_number"
                />
              </div>
            </div>

            <div className={styles.spacertop}>
              <div className={`${styles.tender_amount_wrapper} ${styles.hide}`}>
                <input
                  type="text"
                  name="expected_tender_amount"
                  id="tender_amount_display"
                  placeholder="I will pay ..."
                />
                <span>Rp.</span>
              </div>
              <button
                type="button"
                className={`${styles.button} ${styles.buttonsubmit} ${styles.order}`}
                onClick={order}
              >
                Place My Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
