import { QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";

import "@styles/global.css";
import queryClient from "@/apis/QueryClient";

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
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
