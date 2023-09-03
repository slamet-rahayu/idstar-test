/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { menus } from "./constant";
import { useRouter } from "next/router";
import OrderTable from "../order-table";

export default function ProductsMenu(): React.ReactElement {
  const [order, setOrder] = useState<any>();

  const router = useRouter();

  const menu = router.query.menu;

  const products = menus.filter(
    (e) => e.name === router.query.menu?.toString()
  )[0]?.products;

  return (
    <div className={`${styles.menus} ${styles.menusbackground} ${styles.active}`}>
      <div className={styles.contentblock}>
        <div className={styles.contentwrapper}>
          <div className={styles.itemcategories}>
            <form action="" method="GET">
              <div className={styles.search}>
                <button type="submit" className={styles.searchbutton}>
                  <span className={styles.iconmglass}></span>
                </button>
                <div className={styles.searchfield}>
                  <a href="#" className={styles.mobilesearchbutton}>
                    <span className={styles.iconmglass}></span>
                  </a>
                  <div className={styles.awesomplete}>
                    <div className={styles.awesomplete}>
                      <input
                        type="text"
                        className={styles.awesomplete}
                        id="search"
                        name="search"
                        placeholder="Search menu..."
                        autoComplete="off"
                        aria-owns="awesomplete_list_2"
                        role="combobox"
                      />
                    </div>
                  </div>
                  <a href="#" className={styles.clearsearchbutton}>
                    <span className={styles.iconsearch}></span>
                  </a>
                </div>
              </div>
            </form>
            <a href="#" className={styles.categoriesmobilebutton}>
              {" "}
              September Ceria 9.9{" "}
            </a>
            <div className={`${styles.overlaycategory}`}>
              <div className={styles.categories}>
                {menus.map((v) => (
                  <div
                    className={`${styles.categoriesbox} ${
                      menu?.toString() === v.name ? styles.active : ""
                    }`}
                    key={v.name}
                  >
                    <div className={styles.textcategories}>
                      <a href={`/menus?menu=${v.name}`}>
                        <h3>{v.name}</h3>
                      </a>
                    </div>
                  </div>
                ))}

                <div className={styles.categoriesbox}>
                  <div className={styles.textcategories}>
                    <a href="/menus/upsell-3/">
                      <h3>Upsell</h3>
                    </a>
                  </div>
                </div>

                <span>* Harga belum termasuk pajak</span>
              </div>
            </div>
          </div>
          <div className={styles.itemlists}>
            <div className={`${styles.columns} ${styles.menuboxwrapper}`}>
              {products && !order && products.map((v) => (
                <div className={`${styles.twocolumn} ${styles.menubox}`} key={v.name}>
                  <a href="#" onClick={() => setOrder(v)}>
                    <div className={styles.imagewrapper}>
                      <img
                        src={v.img}
                        alt={v.name}
                      />
                    </div>
                    <div className={styles.description}>
                      <h4>{v.name}</h4>
                      <div className={styles.directions}>
                        <span
                          className={`${styles.price} ${styles.discounted}`}
                        >
                          Rp. {v.price}
                        </span>
                        <span className={`${styles.original} ${styles.price}`}>
                          {v.originalPrice}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
              {order && <OrderTable order={order} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
