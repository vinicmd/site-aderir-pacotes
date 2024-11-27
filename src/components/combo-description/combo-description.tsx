import { Offer } from "@/util/protocols/offer";
import Link from "next/link";
import styles from "@/components/combo-description/combo-description.module.css";
import localFont from "next/font/local";
import { showNOSName } from "@/util/showNOSName";

const azoFont = localFont({
  src: "AzoSans-Regular.woff2",
});

export const ComboDescription = (offer: Offer) => {
  return (
    <div className={`${styles.comboContainer} ${azoFont.className}`}>
      <div className={styles.priceSide}>
        <div className={styles.namePrice}>
          <div className={styles.priceTitle}>
            <h2>{offer.name}</h2>
            {offer.promo && <h3>{offer.promo}</h3>}
          </div>
          <div className={styles.priceContainer}>
            {offer.lastPrice && <s>{`${offer.lastPrice}`}</s>}
            <span>{`${offer.lastPrice && " "}${offer.price}`}</span>
          </div>
        </div>
        <div className={styles.offers}>
          <div className={styles.offerText}>
            <p>{offer.description}</p>
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/contacto">
              <div>Aderir {showNOSName && "N​O​S "}</div>
            </Link>
          </div>
        </div>
      </div>
      {offer.offerText && (
        <div className={styles.beneficesSide}>
          <div className={styles.options}>
            <p>{offer.offerText}</p>
          </div>
          <div className={styles.beneficies}>
            <strong>{offer.benefices}</strong>
          </div>
        </div>
      )}
    </div>
  );
};
