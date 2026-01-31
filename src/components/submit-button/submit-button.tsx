"use client";

import { useFormStatus } from "react-dom";
import { showNOSName } from "@/util/showNOSName";
import styles from "@/components/submit-button/submit-button.module.css";
import { triggerConversion } from "@/util/google-conversion";

export function SubmitButton({ callMe = false }) {
  const { pending } = useFormStatus();

  const handleClick = () => {
    triggerConversion();
  };

  return (
    <button
      className={styles.button}
      disabled={pending}
      type="submit"
      onClick={handleClick}
    >
      {pending
        ? "Enviando..."
        : (callMe && "Ligue-me Grátis") ||
          `Aderir  ${showNOSName ? "N​O​S" : ""}`}
    </button>
  );
}
