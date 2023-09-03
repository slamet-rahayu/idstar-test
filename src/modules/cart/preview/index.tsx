/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

export default function Preview(): React.ReactElement {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  const router = useRouter();

  return (
    <div className={`${styles.cart_wrapper} ${styles.cart_preview}`}>
      <div className={styles.contentblock}>
        <div className={styles.contentwrapper}>
          <div className={styles.clear}></div>
          <form action="" method="POST">
            <div className={styles.cartcontent}>
              <div className={`${styles.left} ${styles.borderright}`}>
                <table className={`${styles.table} ${styles.items}`}>
                  <tbody>
                    <tr className={styles.header}>
                      <th colSpan={2}>Menu Item</th>
                      <th>Quantity</th>
                      <th className={styles.textalignright}>Subtotal</th>
                      <th className={styles.delete}></th>
                    </tr>
                    {cart.map((v) => (
                      <tr className={styles.cartitemrow} key={v.name}>
                        <td>
                          <img
                            src={v.img}
                            className={styles.image}
                            alt=""
                          />
                        </td>
                        <td className={styles.description}>
                          <div className={styles.description_wrapper}>
                            {v.name}
                          </div>
                        </td>
                        <td>
                          <div className={styles.quantity}>
                            <a role="button" className={styles.minus}>
                              -
                            </a>
                            <input
                              type="text"
                              className={styles.itemquantity}
                              value={v.qty}
                              disabled
                            />
                            <a role="button" className={styles.plus}>
                              +
                            </a>
                          </div>
                        </td>
                        <td className={styles.textalignright}>
                          <span className={styles.discounted}>
                            Rp.{" "}
                            <span className={styles.itemsubtotal}>{v.price * v.qty}</span>
                          </span>
                          <span className={styles.original}>
                            <span className={styles.itemsubtotal}>{v.originalPrice * v.qty}</span>
                          </span>
                        </td>
                        <td align="justify">
                          <a href="#" className={styles.delete}>
                            <img
                              src="https://bkdelivery.co.id/static/website/img/cart-remove1x.2d89a8db571c.png"
                              srcSet="https://bkdelivery.co.id/static/website/img/cart-remove1x.2d89a8db571c.png,
                                    https://bkdelivery.co.id/static/website/img/cart-remove2x.13ccd74dddd8.png 2x"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td colSpan={3}>
                        <div className={styles.continuewrapper}>
                          <a
                            href="/menus?menu=September Ceria 9.9"
                            className={styles.linkshopping}
                          >
                            Continue Shopping
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <div className={styles.noteswrapper}>
                  <h2>Add Notes</h2>
                  <input
                    type="text"
                    name="notes"
                    className={styles.addnotes}
                    id="input-note"
                    placeholder="Add notes to your order here..."
                    value=""
                    maxLength={15}
                  />
                  <span className={styles.notecharcounter}>
                    <span id="note-chars-count">0</span>/15
                  </span>
                </div>
              </div>
              <div className={`${styles.right} ${styles.total}`}>
                <h2>Order Subtotal*</h2>
                <div className={styles.grandtotal}>
                  Rp. <span className={styles.number}>9,999</span>
                </div>
                <div className={styles.info}>
                  *Price might change due to your delivery location.
                </div>

                <div
                  className={"styles.minimumtransaction"}
                  style={{ display: "none" }}
                >
                  <div className={styles.notes}>
                    You must have an order with a minimum of Rp. 0
                  </div>
                  <a href="/menus/" className={styles.link}>
                    Continue Shopping
                  </a>
                </div>

                <div className={styles.buttonform} style={{ display: "block" }}>
                  <a
                    href="/accounts/login?next=/cart/preview"
                    className={styles.button}
                  >
                    Login To Order
                  </a>
                  <a href="/cart?step=delivery" className={styles.link}>
                    Continue as Guest
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
