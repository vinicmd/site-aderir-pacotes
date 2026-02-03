declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const triggerConversion = (transactionId?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-11301015927/EMrDCOHFrfAbEPei34wq",
      value: 1.0,
      currency: "EUR",
      transaction_id: transactionId || crypto.randomUUID(),
    });
    console.log("Conversão do Google Ads enviada com sucesso!");
  } else {
    console.warn("Google Ads Tag não carregada ainda.");
  }
};
