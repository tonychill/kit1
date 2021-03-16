import Type from "../../../core/Type";
import Button from "../../../core/Button";

// import Button from "../../core/Button";

const SignUpStep3 = ({}) => {
  return (
    <div>
      <div>
        <div>
          <img src="/media/images/_welcome.png" />
        </div>
      </div>
      <div>
        <div style={{ margin: "auto" }}>
          <Type variant="heading">Welcome to the Club!</Type>
        </div>

        <Type variant="body1">
          We’re so happy that you are now a member to the Enjoythevi family. Our team of travel professionals are eager to help you plan your next amazing trip
          to the Caribbean. 🙌
        </Type>
      </div>
      <div>
        <div style={{ marginBottom: 24 }}> {/* <Button link={"/"} kind="cta" text="Discover" type="submit"></Button> */}</div>
        <div style={{ marginBottom: 16 }}> {/* <Button link={"/plan"} kind="cta" text="Plan" type="submit"></Button> */}</div>
      </div>
    </div>
  );
};
export default SignUpStep3;
