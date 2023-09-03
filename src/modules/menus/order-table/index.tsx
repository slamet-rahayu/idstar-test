/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, Fragment, useEffect } from "react";
import styles from "./styles.module.scss";
import { extras } from "./constant";

interface OrderProp {
  order: any;
}

export default function OrderTable({ order }: OrderProp): React.ReactElement {
  const [qty, setQty] = useState<number>(1);
  const [extra, setExtra] = useState<any[]>([]);
  const [showMsg, setShowMsg] = useState<boolean>(false);

  const incQty = () => setQty((prev) => prev + 1);

  const decQty = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  const price = () => {
    const orderPrice = order.price;
    const extraPrice = extra
      .map((v) => v.qty * v.price)
      .reduce((a, b) => a + b, 0);
    return {
      totalPrice: orderPrice + extraPrice,
      extraPrice,
    };
  };

  useEffect(() => {
    if (showMsg) {
      const removeMsg = setTimeout(() => {
        setShowMsg(false);
      }, 2000);
      return () => clearTimeout(removeMsg);
    }
  }, [showMsg]);

  const addToCart = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartArr = JSON.parse(cart);
      const sameOrder = cartArr.filter((e: any) => e.name === order.name);
      if (sameOrder.length > 0) {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...cartArr.filter((e: any) => e.name !== order.name),
            {
              ...sameOrder[0],
              qty: sameOrder[0].qty + qty,
            },
          ])
        );
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...cartArr,
            {
              name: order.name,
              img: order.img,
              price: order.price,
              originalPrice: order.originalPrice,
              qty,
              extra,
            },
          ])
        );
      }
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          {
            name: order.name,
            img: order.img,
            price: order.price,
            originalPrice: order.originalPrice,
            qty,
            extra,
          },
        ])
      );
    }
    setShowMsg(true);
  };

  return (
    <div className={styles.menus}>
      {showMsg && (
        <div className={styles.msg}>
          <ul>
            <li>1 item added to cart</li>
          </ul>
        </div>
      )}
      <div
        className={`${styles.columns} ${styles.productwrapper} ${styles.productdetailscontent}`}
      >
        <div className={`${styles.left} ${styles.borderright}`}>
          <h1>{order.name}</h1>

          <div className={styles.productdescription}>Cheesy Fries Regular</div>

          <div className={styles.imagewrapper}>
            <img
              className={styles.alacarteversiononly}
              src={order.img}
              alt="9.9 CheesyFries"
            />
          </div>
          <div className={styles.clear}></div>
          <div className={styles.mealwrapper}></div>
          <div className={styles.clear}></div>

          <h2>Add Extras</h2>

          {extras.map((v) => {
            const extraAdded = extra.filter((e) => e.name === v.name);
            const addExtraInit = () => {
              setExtra((prev) => [
                ...prev,
                {
                  name: v.name,
                  price: v.price,
                  qty: 1,
                },
              ]);
            };
            const addExtra = () => {
              setExtra((prev) => [
                ...prev.filter((e) => e.name !== v.name),
                {
                  ...extraAdded[0],
                  qty: extraAdded[0].qty + 1,
                },
              ]);
            };
            const removeExtra = () => {
              if (extraAdded[0].qty > 1) {
                setExtra((prev) => [
                  ...prev.filter((e) => e.name !== v.name),
                  {
                    ...extraAdded[0],
                    qty: extraAdded[0].qty - 1,
                  },
                ]);
              } else {
                setExtra((prev) => prev.filter((e) => e.name !== v.name));
              }
            };
            return (
              <table
                className={`${styles.table} ${styles.extras}`}
                key={v.name}
              >
                <tbody>
                  <tr className={styles.modifierrow}>
                    <td align="center">
                      <img src={v.img} className={styles.image} />
                    </td>
                    <td className={styles.desc}>
                      <span>{v.name}</span>
                      <br />
                      {v.price}
                    </td>
                    <td
                      className={`${styles.middle} ${styles.activemodifier} ${
                        extraAdded.length < 1 ? styles.hide : ""
                      }`}
                    >
                      <span className={styles.plusmin}>
                        <a
                          role="button"
                          onClick={removeExtra}
                          className={styles.deductmodifierquantity}
                        >
                          <img src="https://bkdelivery.co.id/static/website/img/qty-min-1x.6c0b66469214.png" />
                        </a>
                        <input
                          className={styles.modifierquantity}
                          type="text"
                          value={extraAdded[0]?.qty}
                          maxLength={2}
                          disabled
                        />
                        <a
                          onClick={addExtra}
                          role="button"
                          className={styles.addmodifierquantity}
                        >
                          <img src="https://bkdelivery.co.id/static/website/img/qty-add-1x.bbe0808224c9.png" />
                        </a>
                      </span>
                    </td>
                    <td
                      className={`${styles.middle} ${styles.inactivemodifier} ${
                        extraAdded.length > 0 ? styles.hide : ""
                      }`}
                    >
                      <button
                        onClick={addExtraInit}
                        className={`${styles.circle} ${styles.addmodifierquantity}`}
                      >
                        <img src="https://bkdelivery.co.id/static/website/img/qty-add-white-1x.7176768b74ac.png" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>

        <div className={styles.right}>
          <div>
            <div className={`${styles.amount} ${styles.subtotal}`}>
              <div className={styles.grandtotal}>
                <span className={styles.discounted}>
                  Rp. {price().totalPrice}
                </span>
                <span className={styles.original}>
                  {order.originalPrice + price().extraPrice}
                </span>
              </div>
            </div>

            <table className={styles.info}>
              <tbody>
                <tr>
                  <th>ADD ON</th>
                  {extra.length > 0 ? (
                    <td className={styles.selectedmodifier}>
                      {extra.map((v) => (
                        <Fragment key={v.name}>
                          {v.qty} {v.name}
                          <br />
                        </Fragment>
                      ))}
                    </td>
                  ) : (
                    <td className={styles.selectedmodifier}>-</td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.subtotalwrapper}>
            <div className={styles.amountmobile}>
              <div className={styles.grandtotal}>
                <span className={styles.discounted}>
                  Rp. {price().totalPrice}
                </span>
                <span className={styles.original}>
                  {order.originalPrice + price().extraPrice}
                </span>
              </div>
            </div>

            <div className={styles.actionwrapper}>
              <div className={styles.quantitywrapper}>
                <button
                  type="button"
                  className={styles.buttonmin}
                  id="button-min"
                  onClick={decQty}
                >
                  <img
                    src="https://bkdelivery.co.id/static/website/img/qty-min-1x.6c0b66469214.png"
                    srcSet="https://bkdelivery.co.id/static/website/img/qty-min-1x.6c0b66469214.png,
                  https://bkdelivery.co.id/static/website/img/qty-min-2x.bea4473a7c84.png 2x"
                  />
                </button>
                <input
                  id="variant-code-input"
                  type="hidden"
                  className={styles.inputqty}
                  value=""
                  maxLength={2}
                />
                <input
                  id="quantity-input"
                  type="text"
                  className={styles.inputqty}
                  value={qty}
                  maxLength={2}
                  disabled
                />
                <button
                  type="button"
                  className={styles.buttonadd}
                  id="button-add"
                  onClick={incQty}
                >
                  <img
                    src="https://bkdelivery.co.id/static/website/img/qty-add-1x.bbe0808224c9.png"
                    srcSet="https://bkdelivery.co.id/static/website/img/qty-add-1x.bbe0808224c9.png,
                  https://bkdelivery.co.id/static/website/img/qty-add-2x.87810ef6d279.png 2x"
                  />
                </button>
              </div>
              <button
                id="add-to-cart"
                type="button"
                onClick={addToCart}
                className={`${styles.button} ${styles.buttonorange}`}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
