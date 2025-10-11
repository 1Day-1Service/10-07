import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "장비 강화 시뮬레이터",
  description: "RPG 스타일 장비 강화 시뮬레이터 - 부러진 검에서 신의 검까지!",
  verification: {
    google: "4fH6k9IRd0AGqHAYAvpCe_EN_NwmRCpFso5olHqs_MA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}

