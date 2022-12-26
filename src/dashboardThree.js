import "./dashboard.css"
import Insulin from "./components/Meds/Insulin";
import BSmon from "./components/BSMon/BSmon";

function DashboardThree() {
    return (
      <div className="DBThree">
        <section id='Insulin'>
        <Insulin />
        </section>
        <section id='BSMonitoring'>
        <BSmon />
        </section>
      </div>
    );
  }
  
  export default DashboardThree;
