// components/BlogCarousel.tsx
'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Blog } from '@/app/types/microcms';
import { Card } from '../elements/Card';

type Props = {
  blogs: Blog[]
}
export const BlogCarousel: React.FC<Props> = ({ blogs }: Props) => {
  return (
    <Splide
      className="mt-12"
      options={{
        perPage: 3,
        gap: '2rem',
        pagination: false,
        breakpoints: {
          768: {
            perPage: 2,
          },
          640: {
            perPage: 1,
          },
        },
      }}
      aria-label="ブログ記事"
    >
      {blogs.map((blog) => (
        <SplideSlide key={blog.id} className="py-4">
          <Card
            imageUrl={blog.eyecatch?.url}
            imageWidth={blog.eyecatch?.width}
            imageHeight={blog.eyecatch?.height}
            title={blog.title}
            category={blog.category.name}
            link={`/blog/${blog.id}`}
            publishedAt={new Date(blog.publishedAt).toLocaleDateString()}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}