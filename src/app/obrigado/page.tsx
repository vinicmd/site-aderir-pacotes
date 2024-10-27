import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import styles from "@/app/obrigado/page.module.css";
import Link from "next/link";
export default function Contact() {
  return (
    <div className={styles.container}>
      <Header isComplete={false} />
      <main>
        <h1>Obrigado!</h1>
        <p>Em instantes nossa equipa entrará em contacto consigo.</p>
        <Link className={styles.link} href="/">
          Voltar ao Inicio
        </Link>
      </main>
      <Footer />
    </div>
  );
}
