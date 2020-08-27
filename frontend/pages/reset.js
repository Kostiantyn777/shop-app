import Link from "next/link";
import CreateItem from "../components/CreateItem";

const Sell = (props) => {
  return (
    <div>
      <p>Reset Your Password {props.query.resetToken}</p>
    </div>
  );
};

export default Sell;
