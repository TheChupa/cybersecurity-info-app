import { useParams } from "react-router-dom";
import { scamdata } from "../component/dataforproject";

const TrainingProgram = () => {
const { programName } = useParams();
const scam = scamdata[programName];

if(!scam) {
    return <div>You do not possess the ability to break out of the Matrix yet.</div>;
}

return (

<h1>Test is working</h1>
)
}

export default TrainingProgram