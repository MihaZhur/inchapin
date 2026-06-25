import { getImageProps } from 'next/image';
import mobileImg from '@/shared/assets/images/intro/mobile.jpg';
import tabletImg from '@/shared/assets/images/intro/tablet.jpg';
import notebookImg from '@/shared/assets/images/intro/notebook.jpg';
import desktopImg from '@/shared/assets/images/intro/desktop.jpg';
import { breakpoints } from '@/shared/lib/breakpoints';

// https://github.com/vercel/next.js/discussions/19880

export default function HeroBanner() {
  const commonProps = {
    alt: 'Дом бизнес класса',
    sizes: '100vw',
    priority: true,
  };

  const { props: { srcSet: desktopSrcSet } } = getImageProps({
    ...commonProps,
    src: desktopImg,
    width: 1360,
    height: 506,
  });

  const { props: { srcSet: notebookSrcSet } } = getImageProps({
    ...commonProps,
    src: notebookImg,
    width: 964,
    height: 411,
  });

  const { props: { srcSet: tabletSrcSet } } = getImageProps({
    ...commonProps,
    src: tabletImg,
    width: 688,
    height: 487,
  });

  const { props: { srcSet: mobileSrcSet, ...rest } } = getImageProps({
    ...commonProps,
    src: mobileImg,
    width: 320,
    height: 313,
  });

  return (
    <picture>
      <source media={`(min-width: ${breakpoints.desktop.min}px)`} srcSet={desktopSrcSet} />
      <source media={`(min-width: ${breakpoints.notebook.min}px)`} srcSet={notebookSrcSet} />
      <source media={`(min-width: ${breakpoints.tablet.min}px)`} srcSet={tabletSrcSet} />
      <img
        {...rest}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
    </picture>
  );
}
