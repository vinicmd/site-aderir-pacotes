import { ComboDescription } from "@/components/combo-description/combo-description";
import { Header } from "@/components/header";
import { Fragment } from "react";
import styles from "@/app/page.module.css";
import { EmailForm } from "@/components/email-form/email-form";
import { Footer } from "@/components/footer/footer";
import { showNOSName } from "@/util/showNOSName";

const offersFiber = [
  {
    id: 1,
    name: `${showNOSName ? "N​O​S " : "Fibra "} 3`,
    lastPrice: "",
    price: "€34,49/mês",
    description: "120 Canais + Net 30Mbps limitada Fixo com chamadas incluídas",
    offerText: "Oferta de adesão disponível",
    benefices: "1 Mensalidade",
  },
  {
    id: 2,
    name: `${showNOSName ? "N​O​S " : "Fibra "} 3`,
    lastPrice: "€42,49",
    price: "€29,49/mês",
    description:
      "150 Canais + Box TV 4K + Net de 200Mbps ilimitada Fixo com chamadas incluídas",
    offerText: "Oferta de adesão disponível",
    benefices:
      "Desconto de €13/4 meses ou desconto €3 durante 24 meses ou 1 Mensalidade ou Desconto €50 portátil ou Vale desconto €100 Smartphone.",
  },
  {
    id: 3,
    name: `${showNOSName ? "N​O​S " : "Fibra "} 3`,
    lastPrice: "€45,49",
    price: "€32,49/mês",
    description:
      "180 Canais + Box TV 4K + Net de 500Mbps ilimitada Fixo com chamadas incluídas",
    offerText: "Oferta de adesão disponível",
    benefices:
      "Desconto €13/4 meses ou desconto €3 durante 24 meses ou 1 Mensalidade ou Desconto €50 portátil ou Vale desconto €100 Smartphone",
  },
  {
    id: 4,
    name: `${showNOSName ? "N​O​S " : "Fibra "} 4`,
    lastPrice: "€51,49",
    price: "€48,49/mês",
    description:
      "180 Canais + Box TV 4K + Net de 500Mbps ilimitada Fixo com chamadas incluídas + 1 cartão 20GB e 3500 Minutos/SMS",
    offerText: "Oferta de adesão disponível",
    benefices:
      "Desconto €3 durante 24 meses ou 1 Mensalidade ou Portátil ou TV ou Smartphone",
  },
];

const offersSatellite = [
  {
    id: 1,
    name: `${showNOSName ? "N​O​S " : "Fibra "} 3`,
    price: "€42,49/mês",
    description:
      "100 Canais + Box + Internet Fixa Ilimitada Fixo com chamadas incluídas",
    lastPrice: "",
    benefices: "",
    offerText: "",
  },
  {
    id: 2,
    name: `${showNOSName ? "N​O​S " : "Fibra "} 3`,
    price: "€45,49/mês",
    description:
      "105 Canais + Box + Internet Fixa Ilimitada Fixo com chamadas incluídas",
    lastPrice: "",
    benefices: "",
    offerText: "",
  },
  {
    id: 3,
    name: `${showNOSName ? "N​O​S " : "Fibra "} 4`,
    price: "€49,49/mês",
    description:
      "105 canais + Box + internet Fixa Ilimitada + Fixo com chamadas incluídas + 1 cartão 10GB e 3500 Minutos/SMS",
    lastPrice: "",
    benefices: "",
    offerText: "",
  },
];

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <div className={styles.title}>
          <span>{`Pacotes ${showNOSName ? "N​O​S" : "de Internet"}`}</span>
          <h2>Fibra</h2>
          <div></div>
        </div>
        <div id="offers" className={styles.offerFiber}>
          {offersFiber.map((offer) => {
            return (
              <ComboDescription
                benefices={offer.benefices}
                description={offer.description}
                lastPrice={offer.lastPrice}
                name={offer.name}
                offerText={offer.offerText}
                price={offer.price}
                key={offer.id}
              />
            );
          })}
        </div>
        <div className={styles.title}>
          <span>{`Pacotes ${showNOSName ? "N​O​S" : "de Internet"}`}</span>
          <h2>Satélite</h2>
          <div></div>
        </div>
        <div className={styles.offerFiber}>
          {offersSatellite.map((offer) => {
            return (
              <ComboDescription
                benefices={offer.benefices}
                description={offer.description}
                lastPrice={offer.lastPrice}
                name={offer.name}
                offerText={offer.offerText}
                price={offer.price}
                key={offer.id}
              />
            );
          })}
        </div>
        <div className={styles.emailContainer}>
          <EmailForm />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
