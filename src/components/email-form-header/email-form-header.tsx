import styles from "@/components/email-form-header/email-form-header.module.css";
import { redirect } from "next/navigation";
import { SendEmail } from "@/services/send-email";
import { SubmitButton } from "@/components/submit-button/submit-button";

export const EmailFormHeader = () => {
  async function handleSendEmail(formData: FormData) {
    "use server";

    const telephone = formData.get("telephone");

    await SendEmail({
      telephone: String(telephone),
    });

    formData.set("", "");

    redirect("/obrigado");
  }

  return (
    <form className={styles.form} action={handleSendEmail}>
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
  );
};
