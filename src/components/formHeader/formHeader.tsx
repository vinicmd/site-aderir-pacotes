import { redirect } from "next/navigation";
import styles from "@/components/formHeader/form-header.module.css";

export const FormHeader = () => {
  async function handleForm(formData: FormData) {
    "use server";

    formData.set("", "");

    redirect("/contacto");
  }

  return (
    <form className={styles.form} action={handleForm}>
      <input
        required
        placeholder="Código Postal"
        type="tel"
        inputMode="tel"
        name="telephone"
        maxLength={8}
        minLength={8}
      />
      <button className={styles.button} type="submit">
        Verificar
      </button>
    </form>
  );
};
