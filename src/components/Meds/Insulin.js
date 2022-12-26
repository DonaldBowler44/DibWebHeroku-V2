import "./Insulin.css"

function Insulin() {
    return (
      <div className="InsulinSty">
        
        <h1>Insulin Therapy</h1>
        <p className="IPstyle">It is advised you visit a physican for advice on how to start a specific treatment for Insulin Therapy.</p>
		<p className="IPstyle">The video below is to acknowledge safe practices regarding using needles and disposing of them once </p>
		<p className="IPstyle">Insulin therapy is advised. </p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/cmUXo4Crrm0" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      </div>
    );
  }
  
  export default Insulin;