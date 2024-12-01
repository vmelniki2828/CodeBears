import { ParallaxBanner } from 'react-scroll-parallax';
import backgroundImage from '../../components/back2.jpg';

const MelyaPage = () => {
  return (
    <div>
      <ParallaxBanner
        layers={[{ image: backgroundImage, speed: -15 }]}
        style={{ height: '100vh' }} // Пример с явной высотой
      />
    </div>
  );
};

export default MelyaPage;
