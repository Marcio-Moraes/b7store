import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://b7store.com.br"),
  title: "B7Store",
  description: "B7Store - A melhor loja de roupas e acessórios para desenvolvedores. Camisetas, bonés e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="vc-init">
        {children}
      </body>
    </html>
  );
}
