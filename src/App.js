import './App.css';
import Dashboard from './dashboard';
import BowlerHat from "../src/assets/BHatTwo.png"

function App() {
  return (
    <div>
      
    <div>
      <Dashboard />
      <img src={BowlerHat} alt="BowlerHat" height="400" width="300" className='imgStyle' />
      <div className='BH'>
        <h1 className='BHOne'>Bowler Industries</h1>
        <h2 className='BHTwo'>Innovation Inspired</h2>
        <p className='BHThree'>@Donald Bowler Trademark</p>
      </div>
    </div>
    </div>
  );
}

export default App;
