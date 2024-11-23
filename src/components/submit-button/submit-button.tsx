"use client";

import { useFormStatus } from "react-dom";
import styles from "@/components/submit-button/submit-button.module.css";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className={styles.button} disabled={pending} type="submit">
      {pending ? "Enviando..." : "Aderir"}
    </button>
  );
}
