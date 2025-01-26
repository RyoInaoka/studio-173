import Image from "next/image";
import { Inner } from "./components/projects/Inner";
import { RippleMain } from "./components/elements/RippleMain";

export default function Home() {
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
          <p className="mt-10">Studio173は、稲岡亮を事業主とする個人事業の屋号です。</p>
          <p>Webサイト制作・システム開発を主な業務とし、事業用ホームページの立ち上げ相談を数多く承っております。</p>
          <p>Webサイト制作ではコーディング・更新システムの実装を得意領域としており、</p>
          <p>デザイナーを含めたチームでホームページ制作全体を請け負うこともあります。</p>
        </Inner>
      </section>
      <section className="blog py-16">
        <Inner>
          <h2 className="relative font-en font-bold text-5xl inline-block">Blog<Image src="/ripple.svg" alt="" width={160} height={48} className="w-12 absolute top-[50%] right-[-35px] translate-y-[-50%]" /></h2>
        </Inner>
      </section>
    </main>
  );
}
