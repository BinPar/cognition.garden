import Image from 'next/image';
import { cn } from 'classnames';
import Link from 'next/link';

interface Props {
  title: string;
  src: string;
  // eslint-disable-next-line react/require-default-props
  slug?: string;
}

const CoverImage = ({ title, src, slug }: Props): JSX.Element => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
