import styles from "@/components/email-form/email-form.module.css";
import { SendEmail } from "@/services/send-email";
import { redirect } from "next/navigation";
import { showNOSName } from "@/util/showNOSName";
import { SubmitButton } from "../submit-button/submit-button";
import { SendTelegramMessage } from '@/services/send-message-telegram';

export const EmailForm = ({ showMessage = true, aderir = false }) => {
  async function handleSendEmail(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const telephone = formData.get("telephone");

    await SendTelegramMessage({
      name: String(name),
      telephone: String(telephone),
    });

    formData.set("", "");

    redirect("/obrigado");
  }

  return (
    <section className={styles.email}>
      {showMessage && (
        <h2>Já temos {showNOSName && "N​O​S"} internet fibra na sua região!</h2>
      )}
      {!aderir && <p>Fale com um operador especializado.</p>}
      {aderir && <p>Para novos clientes ou adesão para segunda casa.</p>}
      <div className={styles.emailForm}>
        <form action={handleSendEmail}>
          <input placeholder="Nome" type="text" name="name" required />
          <input
            required
            placeholder="Telemóvel"
            type="tel"
            inputMode="tel"
            name="telephone"
            maxLength={9}
            minLength={9}
          />
          <SubmitButton callMe={aderir} />
        </form>
      </div>
    </section>
  );
};
