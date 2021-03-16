// import button from "../../Bits/Button/old/butttons_index";
// import { Link as A } from "@material-ui/core";
import { Field } from "formik";
// import { TextField } from "formik-material-ui";

export default ({ setStep, actions: { setEmail, setName, setPassword }, handleKeyDown, Form }) => {
  const onInputChange = async (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
    // const element = document.getElementById(e.target.id);
    // if (e.target.value) element.classList.remove("is-danger");
    // else element.className += " is-danger";
  };

  const TextField = (props) => {
    return <div>This is a textField</div>;
  };
  return (
    <div>
      <div>
        <Form className="isaform">
          <div>
            <Field
              fullWidth
              name="name"
              component={TextField}
              label="Name"
              variant="outlined"
              InputProps={{
                onKeyUp: (e) => {
                  onInputChange(e);
                },
              }}
              onKeyDown={handleKeyDown}
            ></Field>
          </div>
          <div>
            <Field
              fullWidth
              name="email"
              component={TextField}
              label="Email"
              variant="outlined"
              InputProps={{
                onKeyUp: (e) => {
                  onInputChange(e);
                },
              }}
            ></Field>
          </div>
          <div>
            <Field
              fullWidth
              name="password"
              component={TextField}
              label="Password"
              variant="outlined"
              InputProps={{
                onKeyUp: (e) => {
                  onInputChange(e);
                },
              }}
            ></Field>
          </div>
          <div>
            <Field fullWidth name="confirmpassword" component={TextField} variant="outlined" label="Confirm password"></Field>
          </div>
          <div>
            <div>
              <a href="/club">Learn more</a>
            </div>
          </div>
          <div>
            <button type="submit">Create account</button>
          </div>
          <div>
            {process.env.NODE_ENV === "development" ? (
              <div>
                {" "}
                <button
                  type="submit"
                  onClick={() => {
                    localStorage.clubSignupPhase = 0;
                    setStep(1);
                  }}
                >
                  Payment Step
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    localStorage.clubSignupPhase = 0;
                    setStep(2);
                  }}
                >
                  Welcome step
                </button>
              </div>
            ) : null}
          </div>
        </Form>
      </div>
    </div>
  );
};
