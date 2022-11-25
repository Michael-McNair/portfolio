import Nav from '../../components/Nav/Nav';
import mountain0 from '../../images/mountain0.png';
import mountain1 from '../../images/mountain1.png';
import mountain2 from '../../images/mountain2.png';
import mountain3 from '../../images/mountain3.png';
import mountain4 from '../../images/mountain4.png';
import mountain5 from '../../images/mountain5.png';
import mountain6 from '../../images/mountain6.png';
import mountain7 from '../../images/mountain7.png';
import mountain8 from '../../images/mountain8.png';
import mountain9 from '../../images/mountain9.png';
import mountain10 from '../../images/mountain10.png';
import './scss/Head.css';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default function Head() {
  return (
    <div className="Head">
      <Nav />

      <div className="space-filler"></div>

      <ParallaxProvider>
        <ParallaxBanner
          className="banner"
          layers={[
            {
              image: mountain0,
              translateY: [0, 65],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain1,
              translateY: [0, 58.5],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain2,
              translateY: [0, 52],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {},
            {
              image: mountain3,
              translateY: [0, 45.5],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain4,
              translateY: [0, 39],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain5,
              translateY: [0, 32.5],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain6,
              translateY: [0, 26],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain7,
              translateY: [0, 19.5],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain8,
              translateY: [0, 13],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain9,
              translateY: [0, 6.5],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              image: mountain10,
              translateY: [0, 0],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
          ]}
        />
      </ParallaxProvider>
    </div>
  );
}
