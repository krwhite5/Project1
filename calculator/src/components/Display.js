import { Textfit } from "react-textfit";
import "./Display.css";

const Display = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Display;