import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";

export const metadata: Metadata = {
  title: "Studio173 | スタジオイチナナサン",
  description: "Studio173という屋号でWebサイト制作・業務委託のエンジニアとしてシステム開発を請け負っています。事業主は大阪を拠点とするWebエンジニア稲岡亮です。",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="ja">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
