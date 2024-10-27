import styles from "@/components/email-form/email-form.module.css";
import { SendEmail } from "@/services/send-email";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button/submit-button";

export const EmailForm = ({ showMessage = true }) => {
  async function handleSendEmail(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const telephone = formData.get("telephone");

    await SendEmail({
      name: String(name),
      telephone: String(telephone),
    });

    formData.set("", "");

    redirect("/obrigado");
  }

  return (
    <section className={styles.email}>
      {showMessage && <h2>Já temos cobertura na sua região!</h2>}
      <p>Fale com um operador especializado.</p>
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
          <SubmitButton />
        </form>
      </div>
    </section>
  );
};
