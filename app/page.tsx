import Image from "next/image";
import { Inner } from "./components/projects/Inner";
import { RippleMain } from "./components/elements/RippleMain";

export default function Home() {
  return (
    <main>
      <div className="kv h-kv-sm sm:h-kv flex flex-col justify-center">
        <Inner>
          <div className="flex gap-8 items-center justify-start">
            <Image src="/logo.svg" alt="Studio173" width={160} height={48} className="w-96" />
            <h1 className="font-bold text-3xl">スタジオイチナナサン</h1>
          </div>
          <p className="text-primary text-5xl font-en font-bold mt-10">Web developer based in Osaka.</p>
          <RippleMain />
        </Inner>
      </div>
    </main>
  );
}
