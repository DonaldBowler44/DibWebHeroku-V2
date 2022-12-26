import './BSmon.css'

function BSmon() {
    return (
      <div className='BSStyle'>
       <h1>Blood Sugar Monitoring</h1>
       <a className="btnlnkTwo"href="https://www.cvs.com/shop/cvs-health-true-metrix-go-meter-kit-prodid-1310077?skuid=173140&cgaa=QWxsb3dHb29nbGVUb0FjY2Vzc0NWU1BhZ2Vz&cid=ps_dme_pla&gclid=CjwKCAiAnZCdBhBmEiwA8nDQxRs6pneuG3F5MXg7MmV2v6t-sM2zZCU2ycrlYF_rXmKrdLcqDj1KWBoCMyYQAvD_BwE&gclsrc=aw.ds">You can purchase a Blood Sugar monitoring Kit here.</a>
       <p className='Pstyle'>It is advised you visit a physican if it required for a patient needing blood Sugar Monitoring.</p>
       
       <a className="word" href="https://diabetes.org/tools-support/devices-technology/blood-sugar-checks-type-2"> Research has shown 75% of diabetes patients due not need Blood Sugar Monitoring, click here to see.</a>
	   <p className='Pstyle'>Healthy behavior choices with diet, exercise, and physican recommended medication is typically recommended more than regular monitoring.</p>
	   <p className='Pstyle'>As regular monitoring has had no great effect on increasing the effectiveness of a diabetes treatment.</p>
	   <p className='Pstyle'>Monitoring is advised for people who take medications that cause low blood glucose such as</p>
	   <p className='Pstyle'>meglitinids, sulfonylureas, and insulin.</p>

	   <p className='Pstyle'>The video below is to acknowledge safe practices regarding how to use a Glucometer. </p>

       <iframe width="560" height="315" src="https://www.youtube.com/embed/MZCf621bRHs" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      </div>
    );
  }
  
  export default BSmon;