import { useState } from "react";
import { scamdata } from "../component/dataforproject";
import { useNavigate } from "react-router-dom";

const CyberTraining = () => {
const [selectedProgram, setSelectedProgram] = useState("");
const navigate = useNavigate();
const scams = Object.keys(scamdata);
const handleChange = (event) => {
    setSelectedProgram(event.target.value);
  };
 const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProgram) {
      navigate(`/Training-Room/${selectedProgram}`);
    }
  };   



const scamsList = scams.map((scam,index) => {
    return(
        <option key= {index} value={scam}>{scam}</option>
    )
})



    return(
        <main className= "training-room">
<div className="dropdown">
    <h1>Welcome to the Dojo</h1>
<form onSubmit={handleSubmit}>

<label>Time to Plug in------Boot up-----</label>
<select value={selectedProgram} onChange={handleChange}>
<option value="">Please choose a module</option>
{scamsList}
</select>


<button type="submit"> Run {selectedProgram}</button>
</form>




</div>

<br/>
<img className="training-gif" src="/trainingdropdown.gif" alt="neo learning"></img>

</main>
    )
};

export default CyberTraining