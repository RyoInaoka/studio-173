export const runtime = "edge";

import { Blog } from "@/app/types/microcms";
import { microCMSClient } from "../../libs/client";
import Link from "next/link";

export default async function BlogPage({
  params: { id },
}: Readonly<{
  params: {
    id: string;
  };
}>) {
  const blog: Blog = await microCMSClient.get({ endpoint: "blogs", contentId: id })

  return (
    <main>
      <Link href="/">戻る</Link>
      <h1 className="text-2xl font-bold my-4">{blog.title}</h1>
      <div
        className="my-4"
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />
    </main>
  );
}