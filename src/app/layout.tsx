import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { showNOSName } from '@/util/showNOSName';

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const description =
  `Aderir Pacotes de Internet ${showNOSName ? "N​O​S " : ''} - TV Net Voz - ao melhor preço. Na adesão a qualquer pacote de internet ${showNOSName ? "N​O​S " : ''} escolha a oferta da TV ou Telemóvel ou Tablet. Instalação em 24h/48h.`;
const title = `Aderir Internet ${showNOSName ? "N​O​S " : ''}`;
const url = "https://aderirpacotes.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  keywords: [
    "pacote nos",
    "aderir nos",
    "internet nos",
    "adesão nos",
    "nos tv",
    "NOS",
    "NOS INTERNET",
    "nos tv net voz",
  ],
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: url,
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
