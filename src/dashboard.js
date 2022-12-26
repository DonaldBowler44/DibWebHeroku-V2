import "./dashboard.css"

import TopBar from "./components/Topbar/topBar";
import IfOne from "./components/infoOne/ifOne";
import Quiz from "./components/Quiz/quiz";
import DashboardTwo from "./dashboardTwo";


function Dashboard() {
  return (
    <div className="DBOne">
      <TopBar />
      <IfOne />
      <Quiz />

      <h1 className="dbH">If score is lesser than or equal to 4, you are at low risk for diabetes.</h1>
      <h2 className="dbH">If score is greater than 4 but less than 7, you are at moderate risk for diabetes, adjustments to lifestyle and education on prediabetes is reccomended.</h2>
      <h3 className="dbH">If score is equal to or greater than 7, you are high risk for diabetes, screening with a doctor is advised. </h3>
      <h4 className="HDB">To find out more about treatment for Type 2 Diabetes, scroll below: </h4>
      <DashboardTwo />
      
    </div>
  );
}

export default Dashboard;