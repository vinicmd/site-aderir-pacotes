import styles from "@/components/price-box/price-box.module.css";

export const PriceBox = () => {
  return (
    <div className={styles.priceBox}>
      <div className={styles.first}>
        <p>Desde</p>
        <p className={styles.currency}>€</p>
      </div>
      <div className={styles.second}>
        <h2>34</h2>
        <p className={styles.separator}>,</p>
      </div>
      <div className={styles.third}>
        <span>49</span>
        <p className={styles.month}>/mês</p>
      </div>
    </div>
  );
};
