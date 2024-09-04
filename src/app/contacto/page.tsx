import { EmailForm } from "@/components/email-form/email-form";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import styles from "@/app/contacto/page.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header isComplete={false} />
      <main>
        <EmailForm />
      </main>
      <Footer />
    </div>
  );
}
