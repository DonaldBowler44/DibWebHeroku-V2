import "./dashboard.css"
import Diet from "./components/Diet/diet";
import Exercise from "./components/exercise/exercise";
import WeightLoss from "./components/WLoss/weightLoss";
import DashboardThree from "./dashboardThree";

function DashboardTwo() {
    return (
      <div className="DBTwo">
        <section id='Diet'>
        <Diet />
        </section>
        <section id='Exercise'>
        <Exercise />
        </section>
        <section id='WeightLoss'>
        <WeightLoss />
        </section>
        <DashboardThree />
      </div>
    );
  }
  
  export default DashboardTwo;

  //#Diet">Diet</AnchorLink>

