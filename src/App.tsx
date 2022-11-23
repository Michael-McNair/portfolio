import './App.css';
import Head from './components/Head';
import mountain1 from './images/mountain1.png';
import mountain2 from './images/mountain2.png';
import mountain3 from './images/mountain3.png';
import mountain4 from './images/mountain4.png';
import mountain5 from './images/mountain5.png';
import mountain6 from './images/mountain6.png';
import mountain7 from './images/mountain7.png';
import mountain8 from './images/mountain8.png';
import mountain9 from './images/mountain9.png';
import mountain10 from './images/mountain10.png';
import mountain11 from './images/mountain11.png';
import mountain12 from './images/mountain12.png';

export default function App() {
  return (
    <div className="App">
      <Head />
      <div className="flex">
        <img className="filtered" src={mountain1} />
        <img src={mountain1} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain2} />
        <img src={mountain2} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain3} />
        <img src={mountain3} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain4} />
        <img src={mountain4} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain5} />
        <img src={mountain5} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain6} />
        <img src={mountain6} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain7} />
        <img src={mountain7} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain8} />
        <img src={mountain8} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain9} />
        <img src={mountain9} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain10} />
        <img src={mountain10} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain11} />
        <img src={mountain11} />
      </div>
      <div className="flex">
        <img className="filtered" src={mountain12} />
        <img src={mountain12} />
      </div>
    </div>
  );
}
