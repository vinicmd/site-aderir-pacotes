import styles from "@/components/footer/footer.module.css";
import Link from "next/link";
export const Footer = () => {
  const showFooter = true;
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
                <Link href="tel:+351937787520" className={styles.contactNumber}>
                  (+351) 937 787 520
                </Link>
              </div>
              <div className={styles.email}>
                <Link
                  href="mailto:pacotesinternetfibra@gmail.com"
                  className={styles.contactEmail}
                >
                  pacotesinternetfibra@gmail.com
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className={styles.policy}>
          <p>&copy; 2024 Aderir Pacotes | Todos os direitos reservados</p>
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
