import type { Metadata } from "next";

import "@styles/global.css";
import ClientProviders from "@/apis/configs/ClientProviders";
import { MobileDetect } from "@/components/common";

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
          <MobileDetect />
          <div id="modal" />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
