import Type from "../../../core/Type";
// import Button from "@material-ui/core/Button";
// import ListColumn from "../../Bits/List/listcolumn";
// import data from "../../../hooks/test.data.json";
import PaymentForm from "../../PaymentForm";

export default ({ handleStepChange }) => {
  return (
    <div container spacing={3}>
      <div>
        <div container>
          <div></div>
          <div>
            <div container>
              <div>
                <Type variant="caption">VIP Membership Plan</Type>
              </div>
              <div>
                <Type variant="caption">$995</Type>
                <Type variant="subtitle2">/years (2 years included)</Type>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{/* <ListColumn columns="1" items={data.features} /> */}</div>

      <div>
        <PaymentForm handleStepChange={handleStepChange} />
      </div>
      <div>
        {process.env.NODE_ENV === "development" ? (
          <div>
            <button
              type="submit"
              onClick={() => {
                localStorage.signUpStep = 0;
                handleStepChange(0);
              }}
            >
              Beginning Step
            </button>
            <button
              type="submit"
              onClick={() => {
                localStorage.signUpStep = 0;
                handleStepChange(2);
              }}
            >
              Welcome step
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
