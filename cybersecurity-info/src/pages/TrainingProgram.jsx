import { useParams } from "react-router-dom";
import { scamdata } from "../component/dataforproject";

const TrainingProgram = () => {
const { programName } = useParams();
const scam = scamdata[programName];

if(!scam) {
    return <div>You do not possess the ability to break out of the Matrix yet.</div>;
}

return (
<div>
<h1>{scam.scamType}</h1>


</div>
)
}

export default TrainingProgram