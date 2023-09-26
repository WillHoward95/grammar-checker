import { setGrammarResponse } from "../features/grammar/grammarSlice";
import axios from "axios";

export const grammarCheck = async (input, lang) => {
  const dispatch = useDispatch();
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
    const inputArray = input.split("");
    response.data.response.errors.map((item, index) => {
      let offsetCalculator = item.offset + index * 2;
      inputArray.splice(offsetCalculator, 0, "<u>");
      inputArray.splice(offsetCalculator + item.length + 1, 0, "</u>");
      console.log(item.offset, item.length);
    });
    const tempInput = inputArray.join("");
    setInputUnderline(`<div contenteditable='true'>'${tempInput}'</div>`);
  } catch (error) {
    console.error(error);
  }
};
