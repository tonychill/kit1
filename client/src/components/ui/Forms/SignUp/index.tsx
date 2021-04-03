import { Children, useState, FC, useContext } from "react";
import { handleSignUp } from "../../../../hooks/AWS";
import { GlobalContext } from "../../../../context/GlobalContext";
import { Formik, Form, Field, FormikConfig, FormikValues } from "formik";
import { object, ref, string } from "yup";
import Step0 from "./step0";
import Step2 from "./step2";
import Step3 from "./step3";
import Section from "../../../core/Section";

interface AuthError {
  message: string;
}
interface FormikStepProps {
  label: string;
}
interface Helpers {
  step: number;
  awsSignUp: (values: FormikValues) => void;
}
interface FormikInitialValues {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
}
interface FormikSteperProps extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  helpers?: Helpers;
  validationSchema: unknown;
  initialValues: Partial<FormikInitialValues>;
  step: number;
  onSubmit: (values: any, helpers: any) => Promise<unknown>;
}

const SignUpStepForm = () => {
  const { Auth, session, handleLogIn, handleLogOut } = useContext(GlobalContext);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [paid, setPaid] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    cognito: null,
    blankfield: false,
    passwordmatch: false,
    terms: false,
  });

  // useEffect(() => {
  //   //Check localStorage to see if the user has alread stated the sign up flow and if so set the step in state to 2.
  //   let signUpStep = parseInt(localStorage.getItem("signUpStep")!);
  //   if (signUpStep) setStep(signUpStep);
  //   async () => {
  //     if (await Auth!.currentSession()) {
  //       setStep(1);
  //     }
  //   };
  //   // if (!window.FB) this.createScript();
  //   // Removed the following code because it seemed to be causing a bug with the club
  //   // registration form loading on the first load.
  //   // if (Auth.currentSession()) this.setState({ registered: true });
  //   // this.setState({ registered: this.props.auth.authStatus });

  //   // if (this.state.registered) this.setState({ step: 2 });
  // }, [step]);

  return (
    <div className="formik-form-wrapper p-4">
      <FormikStepper
        step={step}
        validationSchema={object({
          name: string().required(),
          email: string().email().required(),
          password: string().required(),
          // confirmpassword: string()
          //   .oneOf([ref("password"), null], "Passwords must match")
          //   .required(),
        })}
        initialValues={{
          name: "",
          email: "",
          password: "",
          // confirmpassword: "",
        }}
        onSubmit={async (values, helpers) => {
          console.log("values....", values);
          const { name, email, password } = values;
          if (handleSignUp !== undefined && step === 0) {
            /**TODO: Handle error messages before calling the sign
             * up function
             * i.e.: if (!errors.cognito) {...
             *  // const error = Validate(e, this.state);
                // if (errors) {
                //   setErrors({ ...errors });
                //   return errors;
                // }
             * */
            clearErrorState();
            const res = await handleSignUp(name, email, password);
            if (res) setStep(1);
          } else if (null) {
            console.log("Looks like the handleSignUp function is either undefined or you are not currently on step 0 in the sign up flow.");
          }
        }}
      >
        <FormikStep label="Sign up">
          <Step0 handleKeyDown={handleKeyDown} />
        </FormikStep>

        <FormikStep label="Confirm membership">Step 2{/* <Step2 paymentHelpers={paymentHelpers} /> */}</FormikStep>
        <FormikStep label="">
          <Step3 />
        </FormikStep>
      </FormikStepper>
      <div>
        {process.env.NODE_ENV === "development" ? (
          <div className="flex mt-4 justify-around">
            <button
              className="p-2 bg-blue-500 rounded-lg "
              onClick={() => {
                localStorage.signUpStep = 0;
                setStep(0);
              }}
            >
              Start Step
            </button>
            <button
              className="p-2 bg-blue-500 rounded-lg "
              onClick={() => {
                localStorage.signUpStep = 1;
                setStep(1);
              }}
            >
              Payment Step
            </button>
            <button
              className="p-2 bg-blue-500 rounded-lg "
              onClick={() => {
                localStorage.signUpStep = 2;
                setStep(2);
              }}
            >
              Welcome step
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );

  /**Helper functions */

  function clearErrorState() {
    //Quick hack to get the signup function to fire on every click. When the following if statement checks for errors
    //its looking at the component's stale state. Changing the cognito property value to null directly goes against
    //React conventions but it allows the sign up function to always get a cleared error state.
    errors.cognito = null;
    setErrors({
      cognito: null,
      blankfield: false,
      passwordmatch: false,
      terms: false,
    });
  }
  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      console.log(e);
      //handleSignUp(name, email, password)
    }
  }
};

export const FormikStep: FC<FormikStepProps> = ({ children, label }) => {
  return <>{children}</>;
};

export function FormikStepper({ children, step, ...props }: FormikSteperProps) {
  const childrenArray = Children.toArray(children);
  // const [step, setStep] = useState(0);

  const currentChild = childrenArray[step];
  return (
    <Formik {...props}>
      <Form autoComplete="off">{currentChild}</Form>
    </Formik>
  );
}
export default SignUpStepForm;
// actions={{ setName, setEmail, setPassword }}
// Form={Form} //? Doing this may cause a bug.
// setStep={setStep}
