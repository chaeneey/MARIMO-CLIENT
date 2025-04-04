import type { Metadata } from "next";
import "@styles/global.css";

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
      <body>{children}</body>
    </html>
  );
}
