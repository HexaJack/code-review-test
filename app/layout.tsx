import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeMaster - 코딩 유튜버 팬 페이지",
  description: "코딩의 즐거움을 전파하는 CodeMaster의 공식 팬 페이지",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
