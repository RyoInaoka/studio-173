import { Blog } from '@/app/types/microcms';
import { Card } from '@/app/components/elements/Card';
import { Inner } from '@/app/components/projects/Inner';
import { microCMSClient } from "@/app/libs/client";


export const BlogPage: React.FC = async () => {
  const blogs: Blog[] = await microCMSClient
    .get({ endpoint: "blogs" })
    .then((res) => res.contents);
  return (
    <div className="py-24">
      <Inner>
        <div className="relative sm:grid sm:grid-cols-3 sm:gap-8">
          {blogs.map((blog) => (
            <div key={`blog-${blog.id}`}>
              <Card
                imageUrl={blog.eyecatch?.url}
                imageWidth={blog.eyecatch?.width}
                imageHeight={blog.eyecatch?.height}
                title={blog.title}
                category={blog.category.name}
                link={`/blog/${blog.id}`}
                publishedAt={new Date(blog.publishedAt).toLocaleDateString()}
              />
            </div>
          ))}
        </div>
      </Inner>
    </div>
  );
}

export default BlogPage;
