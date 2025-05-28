import { ReUsableButton } from '../component/utility';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <main className="homepage">
      <div className="intro-to-home">
         <h2> When's the last time you checked on <b>your</b> online identity?</h2>
          <br />
         <h3> Was it yesterday?</h3><br/><br/> Was it last week? <br/> has it been.............. <span className="homepage-blink"><b>Never?</b></span> <br/><br/><br/>
          Maybe it's time to perform a little self-checkup. <br/><br/>
</div>
<div className="lead-to-buttons-homepage">

          There is nothing to fear, but there are some things you should know.

          Press the Either button. Each one will take you on a journey.<br/><br/><br/>


           <span className="blue-button-homepage"><ReUsableButton  path="/resources/AllResources" name="Blue"/></span>
       <span className="red-button-homepage"> <ReUsableButton path="/Audit" name="Red" /></span>
         
         
         
          </div>
          
       
        
          
        
      </main>
    </>
  );
};

export default HomePage;
