import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  selectGrammarResponse,
  setGrammarResponse,
} from "../features/grammar/grammarSlice";
import axios from "axios";
// import InputUnderline from "./InputUnderline";
import Response from "./Response";

const Inputs = () => {
  const dispatch = useDispatch();
  let [lang, setLang] = useState("en-GB");
  let [input, setInput] = useState("");
  //   let [inputUnderline, setInputUnderline] = useState("");
  const grammarResponse = useSelector(selectGrammarResponse);

  console.log(grammarResponse);

  const grammarCheck = async (input, lang) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("text", input);
    encodedParams.set("language", lang);

    const options = {
      method: "POST",
      url: "https://textgears-textgears-v1.p.rapidapi.com/grammar",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "2910637076msh72f53c55f3cac50p161e20jsn2b21e7671dda",
        "X-RapidAPI-Host": "textgears-textgears-v1.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      dispatch(setGrammarResponse(response.data));
      //   addUnderline(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //   const addUnderline = (response) => {
  //     const inputArray = input.split("");
  //     response.response.errors.map((item, index) => {
  //       let offsetCalculator = item.offset + index * 2;
  //       inputArray.splice(offsetCalculator, 0, "<u>");
  //       inputArray.splice(offsetCalculator + item.length + 1, 0, "</u>");
  //       console.log(item.offset, item.length);
  //     });
  //     const tempInput = inputArray.join("");
  //     setInputUnderline(`<div contenteditable='true'>'${tempInput}'</div>`);
  //   };

  //   console.log(inputUnderline);

  return (
    <div>
      {/* {inputUnderline ? (
        <InputUnderline inputUnderline={inputUnderline} />
      ) : ( */}
      <textarea
        spellCheck={false}
        onInput={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter text here..."
      ></textarea>
      {/* )} */}
      <button
        onClick={() => {
          grammarCheck(input, lang);
        }}
      >
        Grammar Check
      </button>
      <select
        onChange={(e) => {
          setLang(e.target.value);
        }}
      >
        <option value="en-GB">English-UK</option>
        <option value="en-US">English-US</option>
        <option value="en-ZA">English-South Africa</option>
        <option value="en-AU">English-Australia</option>
        <option value="en-NZ">English-New Zealand</option>
        <option value="fr-FR">French</option>
        <option value="de-DE">German</option>
        <option value="de-AT">German-Austria</option>
        <option value="de-CH">German-Switzerland</option>
        <option value="pt-PT">Portuguese</option>
        <option value="pt-BR">Portuguese-Brazil</option>
        <option value="it-IT">Italian</option>
        <option value="es-ES">Spanish</option>
        <option value="ja-JP">Japanese</option>
        <option value="zh-CN">Mandarin</option>
        <option value="el-GR">Greek</option>
      </select>
      {grammarResponse ? <Response /> : <></>}
    </div>
  );
};

export default Inputs;
