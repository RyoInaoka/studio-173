'use client'

import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { Splide as SplideType, SplideSlide as SplideSlideType } from 'splide-nextjs/react-splide';
import '@splidejs/react-splide/css';
import { Blog } from '@/app/types/microcms';
import { Card } from '../elements/Card';
import { useMemo, useRef } from 'react';
const Splide: typeof SplideType = dynamic(() => import('splide-nextjs/react-splide').then((mod) => mod.Splide), { ssr: false });
const SplideSlide: typeof SplideSlideType = dynamic(() => import('splide-nextjs/react-splide').then((mod) => mod.SplideSlide), { ssr: false });

type Props = {
  blogs: Blog[]
}
export const BlogCarousel: React.FC<Props> = ({ blogs }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const splideRef = useRef<any>(null);
  const showArrows: boolean = useMemo(() => {
    return blogs.length > 2;
  },[blogs.length]);
  const handlePrev = () => {
    splideRef?.current?.splide?.go("<"); // 前に進む
  };

  const handleNext = () => {
    splideRef?.current?.splide?.go(">"); // 次に進む
  };
  return (
    <div className="relative">
      <Splide
        ref={splideRef}
        className="mt-12"
        options={{
          perPage: 3,
          gap: '2rem',
          pagination: false,
          arrows: false,
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
          <SplideSlide key={`blog-${blog.id}`} className="py-4">
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
      {showArrows && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent size-8 disabled:opacity-50"
          >
            <Image src="/prev_button.png" alt="Previous" width={80} height={80} className="w-full h-full" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent size-8 disabled:opacity-50"
          >
            <Image src="/next_button.png" alt="Next" width={80} height={80} className="w-full h-full" />
          </button>
        </>
      )}
    </div>
  );
}