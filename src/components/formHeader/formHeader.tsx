import { redirect } from "next/navigation";
import styles from "@/components/formHeader/form-header.module.css";

export const FormHeader = () => {
  async function handleForm(formData: FormData) {
    "use server";

    formData.set("", "");

    redirect("/teste-disponibilidade");
  }

  return (
    <form className={styles.form} action={handleForm}>
      <input
        required
        placeholder="Código Postal"
        type="tel"
        inputMode="tel"
        name="telephone"
        maxLength={7}
        minLength={7}
      />
      <button className={styles.button} type="submit">
        Verificar
      </button>
    </form>
  );
};
