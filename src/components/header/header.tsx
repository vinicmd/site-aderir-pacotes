import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { PriceBox } from "../price-box/price-box";
import { EmailFormHeader } from "../email-form-header/email-form-header";
import { showNOSName } from "@/util/showNOSName";

export const Header = ({ isComplete = true }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              className={styles.logo}
              alt="Logo"
              width={185}
              height={90}
            />
          </Link>
          <div className={styles.contactContainer}>
            <Link className={styles.contact} href="tel:935884616">
              <Image
                width={20}
                height={20}
                src="/assets/telephone.svg"
                className={styles.telephone}
                alt="telephone icon"
              />{" "}
              935 884 616
            </Link>
            {/* <p className={styles.openingHours}>
              Dias úteis: 10h às 22h / Outros: 10h às 22h
            </p> */}
          </div>
        </div>
        {isComplete && (
          <>
            <div className={styles.subtitle}>
              <h1>
                Aderir Pacotes de Internet {showNOSName && "N​O​S "}Fibra ou
                Satélite ao melhor preço de sempre
              </h1>
            </div>
            <div className={styles.details}>
              <div className={styles.emailContainer}>
                <div className={styles.emailBox}>
                  <p>
                    Se ainda não é cliente, insere o teu número que nós te
                    ligamos.
                  </p>
                  <div className={styles.formEmail}>
                    <EmailFormHeader />
                  </div>
                </div>
              </div>

              <div className={styles.types}>
                <span>TV NET VOZ</span>
                <a href="/#offers">
                  <PriceBox />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
