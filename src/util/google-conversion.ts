// utils/google-conversion.ts

// 1. Tipagem para o TypeScript não reclamar
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// 2. A função exata com os dados do cliente
export const triggerConversion = (transactionId?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      // O código completo que o cliente enviou:
      send_to: "AW-11301015927/EMrDCOHFrfAbEPei34wq",
      value: 1.0,
      currency: "EUR",
      // Gera um ID único se você não passar um, ou usa o que você passar
      transaction_id: transactionId || crypto.randomUUID(),
    });
    console.log("Conversão do Google Ads enviada com sucesso!");
  } else {
    console.warn("Google Ads Tag não carregada ainda.");
  }
};
