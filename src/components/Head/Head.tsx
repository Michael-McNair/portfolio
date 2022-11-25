import Nav from '../../components/Nav/Nav';
import mountain1 from '../../images/mountain1.png';
import mountain2 from '../../images/mountain2.png';
import mountain3 from '../../images/mountain3.png';
import './scss/Head.css';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default function Head() {
  return (
    <div className="Head">
      <Nav />

      <ParallaxProvider>
        <ParallaxBanner
          className="banner"
          style={{ height: '100vh', width: '100%' }}
          layers={[
            {
              image: mountain3,
              translateY: [-5, 55],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain2,
              translateY: [5, 35],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain1,
              translateY: [16, 16],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
          ]}
        />
      </ParallaxProvider>
    </div>
  );
}
