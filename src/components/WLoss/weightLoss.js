import './weightLoss.css';
import CalCalculator from './Calculator/CalCalculator';

function WeightLoss() {
    return (
      <div>
       <h1 className='WLC'>Weight Loss</h1>

       <p className='paraStyleTwo'> This is a BMR calorie calculator in order to estimate your daily calorie intake </p>
       <p className='paraStyleTwo'>It is based upon the Harris-Benedict equation. In order to create a calorie defecit for weight loss</p>
	   <p className='paraStyleTwo'>simply decrease the results given by 250 to 500 calories, depending on how large of a defecit you want.</p>
       <CalCalculator />
      </div>
    );
  }
  
  export default WeightLoss;