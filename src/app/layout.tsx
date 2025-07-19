import type { Metadata } from "next";

import "@styles/global.css";
import ClientProviders from "@/apis/configs/ClientProviders";

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
          <div id="modal" />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
