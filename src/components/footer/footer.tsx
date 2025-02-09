import styles from "@/components/footer/footer.module.css";
import { CONSTANTS } from "@/util/constants";
import { formatTelephone } from "@/util/format-telephone";
import Link from "next/link";
export const Footer = () => {
  const showFooter = false;
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {showFooter && (
          <div className={styles.mainContainer}>
            <div className={styles.residence}>
              <h2>Morada</h2>
              <p className={styles.paragraph}>Monica Mota</p>
              <span>Rua do Moinho Nº 5 2825-016 Caparica</span>
            </div>
            <div className={styles.workHour}>
              <h2>Horário de Funcionamento</h2>
              <p className={styles.opening}>
                Dias úteis:{" "}
                <span className={styles.openHour}>10:00h às 22:00h</span>
              </p>
              <p className={styles.others}>
                Outros Dias:{" "}
                <span className={styles.otherHour}>10:00h às 22:00h</span>
              </p>
            </div>
            <div className={styles.contact}>
              <h2>Contacto</h2>
              <div className={styles.number}>
                <Link
                  href={`tel:+351${CONSTANTS.telephone}`}
                  className={styles.contactNumber}
                >
                  (+351) {formatTelephone(CONSTANTS.telephone)}
                </Link>
              </div>
              <div className={styles.email}>
                <Link
                  href={`mailto:${CONSTANTS.email}`}
                  className={styles.contactEmail}
                >
                  {CONSTANTS.email}
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className={styles.policy}>
          <p>
            &copy; {CONSTANTS.year} Aderir Pacotes | Todos os direitos
            reservados
          </p>
          <Link href="/sobre-nos">Sobre Nós</Link>
          <div>
            <Link href="/politica-de-privacidade">Politica de Privacidade</Link>
            {" | "}
            <Link href="/termos-de-uso">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
