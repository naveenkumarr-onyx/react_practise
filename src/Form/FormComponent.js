import React from "react";

const FormComponent = ({
  type,
  title,
  required,
  onChange,
  placeholder,
  name,
  value,
  id,
  checked,
}) => {
  return (
    <div className=" flex flex-col gap-3">
      {title ? <span>{title}</span> : <></>}
      {type === "checkbox" ? (
        <input
          className="focus:outline-none border border-black"
          id={id}
          type={type}
          name={name}
          checked={checked}
          required={required}
          onChange={onChange}
        />
      ) : (
        <input
          className="focus:outline-none border border-black"
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormComponent;
