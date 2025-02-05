"use client";

import { useFormStatus } from "react-dom";
import { showNOSName } from "@/util/showNOSName";
import styles from "@/components/submit-button/submit-button.module.css";

export function SubmitButton({ callMe = false }) {
  const { pending } = useFormStatus();

  return (
    <button className={styles.button} disabled={pending} type="submit">
      {pending
        ? "Enviando..."
        : (callMe && "Ligue-me Grátis") || `Aderir  ${showNOSName ? "N​O​S": ""}`}
    </button>
  );
}
