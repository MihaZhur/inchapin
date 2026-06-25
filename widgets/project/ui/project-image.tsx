import { getImageProps } from 'next/image';
import mobileImg from '@/shared/assets/images/project/mobile.jpg';
import tabletImg from '@/shared/assets/images/project/tablet.jpg';
import notebookImg from '@/shared/assets/images/project/notebook.jpg';
import desktopImg from '@/shared/assets/images/project/desktop.jpg';
import wideImg from '@/shared/assets/images/project/wide.jpg';
import { breakpoints } from '@/shared/lib/breakpoints';

// https://github.com/vercel/next.js/discussions/19880

export default function ProjectImage() {
  const commonProps = {
    alt: 'Дом проект бизнес класса',
    sizes: '100vw',
    priority: true,
  };

  const { props: { srcSet: wideSrcSet } } = getImageProps({
    ...commonProps,
    src: wideImg,
    width: 733,
    height: 900,
  });
  const { props: { srcSet: desktopSrcSet } } = getImageProps({
    ...commonProps,
    src: desktopImg,
    width: 567,
    height: 720,
  });

  const { props: { srcSet: notebookSrcSet } } = getImageProps({
    ...commonProps,
    src: notebookImg,
    width: 408,
    height: 514,
  });

  const { props: { srcSet: tabletSrcSet } } = getImageProps({
    ...commonProps,
    src: tabletImg,
    width: 290,
    height: 408,
  });

  const { props: { srcSet: mobileSrcSet, ...rest } } = getImageProps({
    ...commonProps,
    src: mobileImg,
    width: 296,
    height: 420,
  });

  return (
    <picture>
      <source media={`(min-width: ${breakpoints.desktop.min}px)`} srcSet={wideSrcSet} />
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
