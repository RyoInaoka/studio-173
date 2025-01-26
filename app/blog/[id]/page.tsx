export const runtime = "edge";

import Image from "next/image";
import Script from "next/script";
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
  const blog: Blog = await microCMSClient.get({ endpoint: "blogs", contentId: id })

  return (
    <article className="py-24">
      <Script
        id="dompurify"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.blogContent = ${JSON.stringify(blog.content)};
            window.sanitizedContent = DOMPurify.sanitize(window.blogContent, {
              ALLOWED_TAGS: ['p', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'img'],
              ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class'],
              ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
              ADD_TAGS: ['iframe'],
              ADD_ATTR: ['frameborder', 'allowfullscreen'],
            });
          `,
        }}
      />
      <Inner>
        <h1 className="text-3xl font-bold my-4">{blog.title}</h1>
        {blog.category && <p className="text-sm text-primary">{blog.category.name}</p>}
        <p className="text-sm">{new Date(blog.publishedAt).toLocaleDateString()}</p>
        {blog.eyecatch && <Image className="py-4" src={blog.eyecatch.url || '/noimage.jpg'} alt={blog.title} width={blog.eyecatch.width || 450} height={blog.eyecatch.height || 300} />}
        <div
          className="my-10 prose lg:prose-md"
          dangerouslySetInnerHTML={{
            __html: <div id="sanitized-content"></div>,
          }}
        />
        <Link href="/" className="text-primary border-b border-primary pb-1 inline-block">戻る</Link>
      </Inner>
    </article>
  );
}