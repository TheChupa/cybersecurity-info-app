import { useState } from "react"


const AboutMe = () => {
const [formData, setFormData] = useState({
    email: "",
    textbox: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hopefully this is a masked email address...You don't even know me yet!");
    setFormData({ email: "", textbox: "" });
  };

  return (
    <div>
      <h1>Hello!</h1>
      <h3>Help me find things to make life better. Contact me if you have ideas.</h3>
      <br /><br /><br /><br /><br />

      <form onSubmit={handleSubmit}>
        <label>
          Your Message:
          <textarea
            name="textbox"
            value={formData.textbox}
            onChange={handleChange}
            rows="6"
            cols="40"
            placeholder="Send me cool ideas."
          />
        </label>
        <br /><br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </label>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    
<br/>
<br/>
<br/>

       
        
        <p>I enjoy the internet very much, but we have to keep it in check. Education is our best weapon for this. <br/><br/>
        Don't let you or your loved ones become a victim of ignorance. 
         </p>

        


        
   </div>     
    )
}
export default AboutMe