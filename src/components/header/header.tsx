import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import styles from "./header.module.css";
import { PriceBox } from "../price-box/price-box";
import { showNOSName } from "@/util/showNOSName";
import { FormHeader } from "../formHeader/formHeader";
import { CONSTANTS } from "@/util/constants";
import { formatTelephone } from "@/util/format-telephone";

export const Header = ({ isComplete = true }) => {
  async function handleForm(formData: FormData) {
    redirect("/obrigado");
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Link href="/">
            <Image
              src={`${showNOSName ? '/assets/logo.svg' : '/assets/logo.png'}`}
              className={styles.logo}
              alt="Logo"
              width={185}
              height={90}
            />
          </Link>
          <div className={styles.contactContainer}>
            <Link
              className={styles.contact}
              href={`tel:${CONSTANTS.telephone}`}
            >
              <Image
                width={20}
                height={20}
                src="/assets/telephone.svg"
                className={styles.telephone}
                alt="telephone icon"
              />{" "}
              {formatTelephone(CONSTANTS.telephone)}
            </Link>
            {/* <p className={styles.openingHours}>
              Dias úteis: 10h às 22h / Outros: 10h às 22h
            </p> */}
          </div>
        </div>
        {isComplete && (
          <>
            <div className={styles.subtitle}>
              <h1>Aderir Pacotes de Internet {showNOSName && "N​O​S "}</h1>
            </div>
            <div className={styles.details}>
              <div className={styles.emailContainer}>
                <div className={styles.emailBox}>
                  <p>
                    Testa a tua cobertura {showNOSName && "N​O​S "}e descobre se
                    tens descontos especiais.
                  </p>
                  <FormHeader />
                </div>
              </div>

              <div className={styles.types}>
                <span>TV NET VOZ</span>
                {/* <a href="/#offers">
                  <PriceBox />
                </a> */}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
