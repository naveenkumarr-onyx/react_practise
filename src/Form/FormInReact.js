import React, { useState } from "react";
import FormComponent from "./FormComponent";

const FormInReact = () => {
  const initialSubjectState = {
    english: true,
    maths: false,
    physics: false,
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "male",
    subject: initialSubjectState,
  });
  const [tableData, setTableData] = useState([]);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubjectChange(e) {
    const { id, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      subject: {
        ...prev.subject,
        [id]: checked,
      },
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTableData([...tableData, formData]);
    console.log(tableData);
  }
  function handleReset() {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "male",
      subject: initialSubjectState,
    });
  }

  return (
    <div className=" flex flex-col gap-3">
      <FormComponent
        type={"text"}
        title={"First Name"}
        placeholder={"first Name"}
        name={"firstName"}
        required={true}
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <FormComponent
        type={"text"}
        title={"last Name"}
        placeholder={"last Name"}
        name={"lastName"}
        required={true}
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <FormComponent
        type={"email"}
        title={"email"}
        placeholder={"enter the email"}
        name={"email"}
        onChange={handleInputChange}
        required={true}
        value={formData.email}
      />
      <FormComponent
        type={"text"}
        title={"Contact"}
        placeholder={"Enter contact Number"}
        name={"contact"}
        required={true}
        value={formData.contact}
        onChange={handleInputChange}
      />
      <div>
        <label>select a favorite Subject</label>
        <FormComponent
          type={"checkbox"}
          name={"subject"}
          title={"English"}
          required={true}
          id={"english"}
          value={formData.subject.english}
          onChange={handleSubjectChange}
        />
        <FormComponent
          type={"checkbox"}
          name={"subject"}
          id={"maths"}
          title={"Maths"}
          required={true}
          value={formData.subject.maths}
          onChange={handleSubjectChange}
        />
        <FormComponent
          type={"checkbox"}
          name={"subject"}
          title={"Physics"}
          id={"physics"}
          required={true}
          value={formData.subject.physics}
          onChange={handleSubjectChange}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>last Name</th>
            <th>email</th>
            <th>contact</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => (
            <tr key={index}>
              <td>{value.firstName}</td>
              <td>{value.lastName}</td>
              <td>{value.email}</td>
              <td>{value.contact}</td>
              <td>
                {Object.entries(value.subject)
                  .filter(([subject, isSelected]) => isSelected)
                  .map(([subject]) => subject)
                  .join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormInReact;
