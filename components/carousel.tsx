
 import dynamic from 'next/dynamic'
 const Carousel = dynamic(
  () => import('@brainhubeu/react-carousel'),
  { ssr: false },
);
const autoplayPlugin = dynamic(
  () => import('@brainhubeu/react-carousel'),
  { ssr: false },
);
 import '@brainhubeu/react-carousel/lib/style.css';

 export default function BrandCarousel()  {


  return (
    <div>
        <Carousel
        //   plugins={[
        //   'infinite',
        //   {
        //     resolve: autoplayPlugin,
        //     options: {
        //       interval: 2000,
        //     }
        //   },
        // ]}   
        //animationSpeed={1000}
      >
          <img src="/img/logo.png" />
          <img src="/img/logo.png" />
          <img src="/img/logo.png" />
      </Carousel>
    </div>
  );
};

