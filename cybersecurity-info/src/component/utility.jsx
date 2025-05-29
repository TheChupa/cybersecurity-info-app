
import { useNavigate } from "react-router-dom";

export const handleChange = (event) => {
    setSelectedScam(event.target.value);
  };
  
export const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    
  };



export const ReUsableButton = ({path , name, className= "" }) => {
const navigate = useNavigate();
return(

  <button className={className} onClick={() => navigate(path)}>{name}</button>
)
}