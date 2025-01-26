import Image from "next/image"
import Link from "next/link";
import { tv } from "tailwind-variants";

type Props = {
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  link?: string;
  title: string;
  category: string;
  publishedAt: string;
}

const card = tv({
  base: 'bg-white rounded-lg overflow-hidden shadow-md shadow-gray-100 hover:shadow-lg transition-shadow duration-300',
  variants: {
    size: {
      default: 'max-w-sm',
      large: 'max-w-md'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

export const Card: React.FC<Props> = ({ ...props }) => {
  return (
    <article className={card()}>
      <Link href={props.link || ''}>
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={props.imageUrl || '/noimage.jpg'}
            alt={props.title}
            width={props.imageWidth || 350}
            height={props.imageHeight || 200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-sm font-medium text-blue-600 mb-2">
            {props.category}
          </h3>
          <p className="text-sm">{props.publishedAt}</p>
          <p className="text-md font-bold text-gray-900 whitespace-pre-line mt-2">
            {props.title}
          </p>
        </div>
      </Link>
    </article>
  )
}