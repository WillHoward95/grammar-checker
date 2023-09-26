import { useState } from "react";

const InputUnderline = (props) => {
  let [input, setInput] = useState("");

  console.log(input);

  return (
    <div
      onInput={(e) => setInput(e.currentTarget.textContent)}
      className="textInput"
      spellCheck={false}
      dangerouslySetInnerHTML={{ __html: props.inputUnderline }}
    ></div>
  );
};

export default InputUnderline;
