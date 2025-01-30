export const runtime = "edge";

import Image from "next/image";
import { Blog } from "@/app/types/microcms";
import { microCMSClient } from "../../libs/client";
import Link from "next/link";
import { Inner } from "@/app/components/projects/Inner";

type Props = {
  params: Promise<{
    id: string;
  }>;
};


export default async function BlogPage({
  params,
}: Props) {
  const { id } = await params;
  const blog: Blog = await microCMSClient.get({ endpoint: "blogs", contentId: id });

  if (!blog) {
    return <p>記事が見つかりません</p>;
  }

  return (
    <article className="py-24">
      <Inner isNarrow>
        <h1 className="text-2xl sm:text-3xl text-primary font-bold my-8">{blog.title}</h1>
        {blog.category && <p className="text-sm text-primary">{blog.category.name}</p>}
        <p className="text-sm">{new Date(blog.publishedAt).toLocaleDateString()}</p>
        {blog.eyecatch && <Image className="py-4" src={blog.eyecatch.url || '/noimage.jpg'} alt={blog.title} width={blog.eyecatch.width || 450} height={blog.eyecatch.height || 300} />}
        <div
          className="my-10 prose prose-sm sm:prose-base"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
        <Link href="/" className="text-primary border-b border-primary pb-1 inline-block">戻る</Link>
      </Inner>
    </article>
  );
}