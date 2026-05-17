import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vintly - Automatyzuj sprzedaż na Vinted",
  description:
    "Vintly to rozszerzenie Chrome, które automatyzuje sprzedaż na Vinted: auto-bump, masowe wystawianie, inteligentne odpowiedzi i analityka.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Vintly - Automatyzuj sprzedaż na Vinted",
    description:
      "Auto-bump, masowe wystawianie, smart replies i analityka - wszystko w jednym rozszerzeniu Chrome.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
