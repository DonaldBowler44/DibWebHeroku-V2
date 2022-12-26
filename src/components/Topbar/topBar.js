import "./TopBar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function TopBar() {
    return (
      <div className="topnav">
        <AnchorLink className="active">Home</AnchorLink>
        <AnchorLink href="#Diet">Diet</AnchorLink>
        <AnchorLink href="#Exercise">Exercise</AnchorLink>
        <AnchorLink href="#WeightLoss">WeightLoss</AnchorLink>
        <AnchorLink href="#Insulin">Medication</AnchorLink>
        <AnchorLink href="#BSMonitoring">Monitoring</AnchorLink>
      </div>
    );
  }
  
  export default TopBar;

