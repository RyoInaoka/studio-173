import DOMPurify from "dompurify";
import { JSDOM } from 'jsdom';
import { Blog } from "@/app/types/microcms";
import { microCMSClient } from "../../libs/client";
import Link from "next/link";

const window = new JSDOM('').window;
const purify = DOMPurify(window);

export default async function BlogPage({
  params: { id },
}: Readonly<{
  params: {
    id: string;
  };
}>) {
  const blog: Blog = await microCMSClient.get({ endpoint: "blogs", contentId: id })
  const sanitizedContent = purify.sanitize(blog.content, {
    ALLOWED_TAGS: [
      'p', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'strong', 'em', 'a', 'img'
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class'],
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    ADD_TAGS: ['iframe'], // 必要な場合のみ
    ADD_ATTR: ['frameborder', 'allowfullscreen'], // 必要な場合のみ
  });
  return (
    <main>
      <Link href="/">戻る</Link>
      <h1 className="text-2xl font-bold my-4">{blog.title}</h1>
      <div
        className="my-4"
        dangerouslySetInnerHTML={{
          __html: sanitizedContent,
        }}
      />
    </main>
  );
}