/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { navMenu } from "./constant";
import Link from "next/link";

export default function Header(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<any[]>([]);
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  const cartTotal = cart.map((v) => v.qty).reduce((a, b) => a + b, 0);

  const subtotal = cart.map((v) => v.qty * v.price).reduce((a, b) => a + b, 0)

  return (
    <div className={styles.headerblock}>
      <div className={styles.headerbackground}>
        <div className={styles.headerwrapper}>
          <div className={styles.website}>
            <a href="/" className={styles.logo}>
              <img
                src="https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png"
                srcSet="
                  https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png,
                  https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png 2x
                "
              />
            </a>
            <div className={styles.leftnavigation}>
              {navMenu.map((v) => (
                <div className={styles.grouptitle} key={v.title}>
                  <Link href={v.href}>
                    <span className={styles.subtitle}>{v.subtitle}</span>
                    <span className={styles.title}>{v.title}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.rightnavigation}>
              <div className={styles.group}>
                <div className={styles.login}>
                  <a href="/accounts/login">LOGIN</a>
                </div>
              </div>

              <div className={styles.cartblock}>
                <a href="/cart/preview" id="cart" className={styles.cart}>
                  <img
                    src="https://bkdelivery.co.id/static/website/img/BK_TopCart1x.5b5f4dd7b2a4.png"
                    srcSet="
                      https://bkdelivery.co.id/static/website/img/BK_TopCart1x.5b5f4dd7b2a4.png,
                      https://bkdelivery.co.id/static/website/img/BK_TopCart2x.ab793c4833a3.png 2x
                    "
                  />
                </a>
                <div className={styles.cartdata}>
                  <div className={styles.cartlist}>
                    <span className={styles.triangle}></span>
                    <div className={styles.cartcontentdata}>
                      <div className={styles.cardcontentdatawrapper}>
                        {cart.length > 0 ? (
                          <>
                            <table className={styles.tablefloating}>
                              <tbody>
                                {cart.map((v) => (
                                  <tr key={v.name}>
                                    <td>
                                      <img src={v.img} width={35} />
                                    </td>
                                    <td className={styles.cartlistdescription}>
                                      {v.name}
                                    </td>
                                    <td>x {v.qty} </td>
                                    <td align="right">
                                      <span className={`${styles.itemsubtotal} ${styles.discounted}`}>
                                        Rp. {v.price * v.qty}
                                      </span>
                                      <span className={`${styles.itemsubtotal} ${styles.original}`}>
                                        {v.originalPrice * v.qty}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <div className={styles.subtotal}>
                              <div className={styles.text}>
                                <span>SUBTOTAL</span>
                              </div>
                              <div className={styles.total}>Rp. {subtotal}</div>
                            </div>
                            <a
                              href="/cart"
                              className={`${styles.button} ${styles.buttonordernow}`}
                            >
                              Go To Cart
                            </a>
                          </>
                        ) : (
                          <>
                            <p className={styles.carterror}>
                              Your cart is empty.
                            </p>
                            <a
                              href="/cart/preview"
                              className={`${styles.button} ${styles.buttonordernow}`}
                            >
                              Order Now
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mobile}>
            <div
              className={`${styles.button_container} ${styles.menus}`}
              id="toggle"
            >
              <a href="#" onClick={toggleMenu}>
                {open ? (
                  <img
                    src="https://bkdelivery.co.id/static/website/img/menu-close1x.a753256ab0d1.png"
                    srcSet="
                    https://bkdelivery.co.id/static/website/img/menu-close1x.a753256ab0d1.png,
                    https://bkdelivery.co.id/static/website/img/menu-close2x.91caab0c5b57.png 2x
                  "
                    className={styles.close}
                  />
                ) : (
                  <img
                    src="https://bkdelivery.co.id/static/website/img/BK_TopMenu1x.958354c1f2d2.png"
                    srcSet="
                      https://bkdelivery.co.id/static/website/img/BK_TopMenu1x.958354c1f2d2.png,
                      https://bkdelivery.co.id/static/website/img/BK_TopMenu2x.98a69d549abd.png 2x
                    "
                    className={styles.burger}
                  />
                )}
              </a>
            </div>

            <div
              className={`${styles.overlay} ${open ? styles.open : ""}`}
              id="overlay"
            >
              <nav className={styles.overlaymenu}>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  {navMenu.map((v) => (
                    <li key={v.title}>
                      <Link href={v.href}>
                        <span>{v.subtitle}</span> {v.title}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <hr />
                  </li>

                  <li className={"styles.small"}>
                    <a href="/accounts/login">Login</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={styles.logo_mobile}>
              <a href="/">
                <img
                  src="https://bkdelivery.co.id/static/website/img/BK-NewLogo-1x.2bd4c88032ad.png"
                  srcSet="
                    https://bkdelivery.co.id/static/website/img/BK-NewLogo-1x.2bd4c88032ad.png,
                    https://bkdelivery.co.id/static/website/img/BK-NewLogo-2x.8c80bfc81ee0.png 2x
                  "
                />
              </a>
            </div>
            <div className={styles.rightnavigation}>
              <a href="/cart/preview" id="cart" className={styles.cart}>
                {cart.length > 0 && <span className={`${styles.badge} ${styles.red}`}>{cartTotal}</span>}
                <img
                  src="https://bkdelivery.co.id/static/website/img/BK_TopCart1x.5b5f4dd7b2a4.png"
                  srcSet="
                    https://bkdelivery.co.id/static/website/img/BK_TopCart1x.5b5f4dd7b2a4.png,
                    https://bkdelivery.co.id/static/website/img/BK_TopCart2x.ab793c4833a3.png 2x
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
