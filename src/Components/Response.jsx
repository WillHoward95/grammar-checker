import { selectGrammarResponse } from "../features/grammar/grammarSlice";
import { useSelector } from "react-redux";

const Response = () => {
  const grammarResponse = useSelector(selectGrammarResponse);
  console.log(grammarResponse.response.errors);
  return grammarResponse.response.errors.map((item) => {
    return <div>{item.description.en}</div>;
  });
};

export default Response;
