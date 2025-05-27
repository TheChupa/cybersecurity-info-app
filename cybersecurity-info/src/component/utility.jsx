
import { useNavigate } from "react-router-dom";

export const handleChange = (event) => {
    setSelectedScam(event.target.value);
  };
  
export const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    
  };

export const GoBackButton = () => {
const navigate = useNavigate();
  return(

    <button onClick={() => navigate(-1)}>Go Back to the Dojo</button>
  )
};