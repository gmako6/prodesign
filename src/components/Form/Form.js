import React from "react";

function Form(props) {
  return (
    <div className="p1 flex flex-col">
      <label>Name:</label>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className="form-text rounded-full border-2 border-[#c1262d] hover:border-[#c1262d] p-3 focus:border-[#cf343c]"
      />
    </div>
  );
}

export default Form;
