import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForAuditForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    maidenName: "",
    petsName: "",
    zodiac: "",
    bestfriend: "",
    ss: "",
    childhoodaddress: "",
    firstvehicle: "",
    siblings: "",
    mailing: "",
    phonenumber: "",
  });
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/Training-Room");
  };
  const [hideForm, setHideForm] = useState(false);
  const [hideButton, setHideButton] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHideForm(true);
    setHideButton(false);
    console.log(hideForm);
    console.log("block");
    alert(
      `You just gave me all of these information points, voluntarily...WHAT ARE YOU DOING? I now have the following data points on you!\n
     ${formData.name} ${formData.username} ${formData.email} ${formData.petsName} ${formData.zodiac} ${formData.bestfriend}
     ${formData.ss} ${formData.childhoodaddress} ${formData.firstvehicle}  ${formData.siblings}  ${formData.mailing} ${formData.phonenumber}\n
     What is possible if I have all of this information? Let's find out.`
    );
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }} hidden={hideForm}>
        <h1>Cybersecurity Audit</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Favorite username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              maxLength={10}
            />
          </label>
          <br />
          <label>
            Mother's Maiden Name:
            <input
              type="text"
              name="maidenName"
              value={formData.maidenName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            First Pet's Name:
            <input
              type="text"
              name="petsName"
              value={formData.petsname}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Zodiac sign:
            <input
              type="text"
              name="zodiac"
              value={formData.zodiac}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Mailing Address:
            <input
              type="text"
              name="mailing"
              value={formData.mailing}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Number of siblings:
            <input
              type="text"
              name="siblings"
              value={formData.siblings}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            First Vehicle:
            <input
              type="text"
              name="firstvehicle"
              value={formData.firstvehicle}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Last 4 of SS#:
            <input
              type="text"
              name="ss"
              value={formData.ss}
              onChange={handleChange}
              maxLength={4}
            />
          </label>
          <br />
          <label>
            Street of childhood home:
            <input
              type="text"
              name="childhoodaddress"
              value={formData.childhoodaddress}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Name of Best friend from childhood:
            <input
              type="text"
              name="bestfriend"
              value={formData.bestfriend}
              onChange={handleChange}
            />
            <br />
          </label>
          <br />
          <input type="submit" />
        </form>
      </div>

      <button onClick={handleNavigation} hidden={hideButton}>
        Where did this come from?
      </button>
    </div>
  );
}

export default ForAuditForm;
