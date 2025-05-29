
import { useNavigate } from "react-router-dom";

export const handleChange = (event) => {
    setSelectedScam(event.target.value);
  };
  
export const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    
  };



export const ReUsableButton = ({path , name, type= ""}) => {
const navigate = useNavigate();
return(

  <button type={type} onClick={() => navigate(path)}>{name}</button>
)
}