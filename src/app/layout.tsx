import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aderirpacotes.com"),
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
  title: "Aderir Pacotes N​O​S",
  description: "Aderir Pacotes de Internet ao melhor preço de sempre.",
  openGraph: {
    title: "Aderir Pacotes N​O​S",
    description: "Aderir Pacotes de Internet ao melhor preço de sempre.",
    url: "https://aderirnos.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://aderirnos.com/",
    title: "Aderir Pacotes N​O​S",
    description: "Aderir Pacotes de Internet ao melhor preço de sempre.",
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
