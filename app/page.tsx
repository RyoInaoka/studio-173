import Image from "next/image";
import { Inner } from "./components/projects/Inner";
import { RippleMain } from "./components/elements/RippleMain";
import { microCMSClient } from "./libs/client";
import { Blog } from "./types/microcms";
import { BlogCarousel } from "./components/projects/BlogCarousel";

const Home = async () => {
  const blogs: Blog[] = await microCMSClient
    .get({ endpoint: "blogs" })
    .then((res) => res.contents);
  return (
    <main>
      <section className="kv h-kv-sm sm:h-kv flex flex-col justify-center">
        <Inner className="flex flex-col justify-center">
          <div className="flex gap-8 items-center justify-start">
            <Image src="/logo.svg" alt="Studio173" width={160} height={48} className="w-96" />
            <h1 className="font-bold text-3xl">スタジオイチナナサン</h1>
          </div>
          <p className="text-primary text-5xl font-en font-bold mt-10">Web developer based in Osaka.</p>
          <RippleMain />
        </Inner>
      </section>
      <section className="about py-16">
        <Inner>
          <h2 className="relative font-en font-bold text-5xl inline-block">About<Image src="/ripple.svg" alt="" width={160} height={48} className="w-12 absolute top-[50%] right-[-35px] translate-y-[-50%]" /></h2>
          <div className="mt-12 flex items-end">
            <h3 className="text-3xl font-bold font-en">Studio173</h3>
            <p className="text-xl font-bold ml-4 pb-0.5">スタジオイチナナサン</p>
          </div>
          <p className="mt-6">Studio173は、稲岡亮を事業主とする個人事業の屋号です。</p>
          <p>Webサイト制作・システム開発を主な業務とし、事業用ホームページの立ち上げ相談を数多く承っております。</p>
          <p>Webサイト制作ではコーディング・更新システムの実装を得意領域としており、</p>
          <p>デザイナーを含めたチームでホームページ制作全体を請け負うこともあります。</p>
          <div className="mt-10 flex items-end">
            <h3 className="text-3xl font-bold font-en">稲岡 亮</h3>
            <p className="text-xl font-bold font-en ml-4 pb-0.5">Inaoka Ryo</p>
          </div>
          <p className="mt-6">大阪を拠点とするWebエンジニアです。</p>
          <p>現在、SaaSスタートアップでWebアプリケーションエンジニア(フロントエンド・バックエンド兼任)として</p>
          <p>システム開発の要件定義・開発・テスト・運用保守までを幅広く担当しております。</p>
          <h3 className="text-3xl font-bold font-en mt-10">My Links</h3>
          <ul className="mt-6 flex gap-8">
            <li className="flex items-center">
              <Image src="/github.svg" alt="GitHub" width={24} height={24} className="w-6" />
              <a href="https://github.com/RyoInaoka" className="ml-2 font-en hover:text-primary duration-300" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </Inner>
      </section>
      <section className="blog py-16">
        <Inner>
          <h2 className="relative font-en font-bold text-5xl inline-block">Blog<Image src="/ripple.svg" alt="" width={160} height={48} className="w-12 absolute top-[50%] right-[-35px] translate-y-[-50%]" /></h2>
          <BlogCarousel blogs={blogs} />
        </Inner>
      </section>
    </main>
  );
}

export default Home;
