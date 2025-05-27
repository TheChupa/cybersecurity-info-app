import { useState } from "react";
import { scamdata } from "../component/dataforproject";
import { handleSubmit } from "../component/utility";

const CyberTraining = () => {
const [selectedProgram, setSelectedProgram] = useState("");
const scams = Object.keys(scamdata);
const handleChange = (event) => {
    setSelectedProgram(event.target.value);
  };
   


const scamsList = scams.map((scam,index) => {
    return(
        <option key= {index} value={scam}>{scam}</option>
    )
})



    return(
<div>
    <h1>Welcome to the Dojo</h1>
<form onSubmit={handleSubmit}>

<label>Time to Plug in------Boot up-----</label>
<select value={selectedProgram} onChange={handleChange}>
<option value="">Please choose a module</option>
{scamsList}
</select>
</form>

<h3>You have chosen:</h3>
<button>{selectedProgram}</button>

</div>

    )
};

export default CyberTraining