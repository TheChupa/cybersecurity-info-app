import { ReUsableButton } from "../component/utility"

const ResourcesPage = () =>{

    

//todo:pass data into form and return it in nice organized blocks. Will expand infinetely(as i add more) for each type of safety, email safety/scams, address safety/scams, personal data(maidenname, pet, kind of car "quizzez") safety/scams.
//Organize this date in video boxes on top right of each div, and text on left  hand side




    return (
<main className="resources-page">

  
  <div className="title-resources">Resources</div>
  <div className="wiki-resources">Wikipedia Links
  <br/>
  <a href="https://en.wikipedia.org/wiki/Pig_butchering_scam" target="_blank">Pig Butchering</a><br/>
  <a href="https://en.wikipedia.org/wiki/Phishing" target="_blank">Phishing</a><br/>
  <a href="https://en.wikipedia.org/wiki/Data_breach" target="_blank">Data Breach</a><br/>
  <a href="https://en.wikipedia.org/wiki/Data_broker" target="_blank">Data Brokers</a><br/>
  <a href="https://en.wikipedia.org/wiki/Dark_web" target="_blank">Dark Web</a><br/>
  <a href="https://en.wikipedia.org/wiki/Password_manager" target="_blank">Password Manager</a><br/>
  <a href="https://en.wikipedia.org/wiki/Scam_center" target="_blank">Scam Center</a><br/>
  <a href="https://en.wikipedia.org/wiki/Internet_safety" target="_blank">Basic Internet Safety</a><br/>
 
  
  
  </div>
  <div className="serious-resources">Serious Stuff
  <br/>
  <a href="https://www.youtube.com/watch?v=knhQ2f8anT8&t=18s" target="_blank">Kitboga Password Game</a><br/>
  <a href="https://duckduckgo.com/duckduckgo-help-pages/email-protection/duck-addresses" target="_blank">Email Masking</a><br/>
  <a href="https://www.pbs.org/wgbh/frontline/article/scam-centers-trafficking-myanmar/" target="_blank">Scam Trafficking</a><br/>
  <a href="https://www.esecurityplanet.com/trends/how-scammers-steal-your-data/" target="_blank">How They get your data</a><br/>
  
  
  
  </div>
  <br/>
  
<ReUsableButton path="/" name="Go Back" className="resources-button"/>
  


</main>
    )
}
export default ResourcesPage