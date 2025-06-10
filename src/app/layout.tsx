import type { Metadata } from "next";

import "@styles/global.css";
import ClientProviders from "@/apis/configs/ClientProviders";
import { Footer, Header } from "@/components/common";

export const metadata: Metadata = {
  title: "MARIMO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ClientProviders>
          <Header />
          <div style={{ minHeight: "calc(100dvh - 11rem)" }}>{children}</div>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
