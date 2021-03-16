import { useState, useEffect, useContext, FC, Children, KeyboardEvent } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { Form, Formik, FormikProvider, FormikValues } from "formik";
import { object, string, ref } from "yup";
import axios from "axios";

import Step0 from "./step0";
import Step2 from "./step2";
import Step3 from "./step3";

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

interface FormikSteperProps {
  helpers: Helpers;
  validationSchema: unknown;
  initialValues: FormikInitialValues;
}
const SignUp = ({}) => {
  const { Auth } = useContext(AuthContext);
  // const { setUser, Auth } = auth;

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

  const clearErrorState = () => {
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
  };

  //-----For payment testing-----//
  const awxSignUp = async () => {
    setStep(1);
  };
  //----------------------------//

  const awsSignUp = async () => {
    clearErrorState();
    // const error = Validate(e, this.state);
    // if (errors) {
    //   setErrors({ ...errors });
    //   return;
    // }

    if (!errors.cognito) {
      // This is going to need better validation.
      try {
        const signUpResponse = await Auth?.signUp({
          username: email, //`${d.getTime()}@ilanlyfe.com`, //Testing: userflow (original=> password: email,)
          password,
          attributes: {
            email,
            name,
          },
        });

        if (signUpResponse) {
          confirmUserSignUp(signUpResponse);
        }
      } catch (error) {
        console.log(error);
        let err = null;
        !error.message ? (err = { message: error }) : (err = error);
        alert(!error.message ? error : error.message);
        //TODO: Typing:
        // setErrors({ cognito: error });
      }
    }
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      awsSignUp();
    }
  };
  useEffect(() => {
    //Check localStorage to see if the user has alread stated the sign up flow and if so set the step in state to 2.
    let clubSignupPhase = parseInt(localStorage.getItem("clubSignupPhase")!);
    if (clubSignupPhase) setStep(clubSignupPhase);
    async () => {
      if (await Auth!.currentSession()) {
        setStep(1);
      }
    };
    // if (!window.FB) this.createScript();
    // Removed the following code because it seemed to be causing a bug with the club
    // registration form loading on the first load.
    // if (Auth.currentSession()) this.setState({ registered: true });
    // this.setState({ registered: this.props.auth.authStatus });

    // if (this.state.registered) this.setState({ step: 2 });
  }, [step]);
  const helpers = { step, email, paid, awsSignUp };
  const paymentHelpers = { setStep };
  return (
    <div className="root container justify-center">
      <div>
        <FormikStepper
          helpers={helpers}
          validationSchema={object({
            name: string().required(),
            email: string().email().required(),
            password: string().required(),
            confirmpassword: string()
              .oneOf([ref("password"), null], "Passwords must match")
              .required(),
          })}
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
        >
          <FormikStep label="Sign up">
            <Step0
              handleKeyDown={handleKeyDown}
              actions={{ setName, setEmail, setPassword }}
              Form={Form} //? Doing this may cause a bug.
              setStep={setStep}
            />
          </FormikStep>

          <FormikStep label="Confirm membership">
            <Step2 paymentHelpers={paymentHelpers} />
          </FormikStep>
          <FormikStep label="">
            <Step3 />
          </FormikStep>
        </FormikStepper>
      </div>
    </div>
  );
  interface AwsSignUpResponse {
    userSub: string;
  }
  function confirmUserSignUp(signUpResponse: AwsSignUpResponse) {
    console.log(signUpResponse);
    // setUser({ user: signUpResponse.userSub });
    localStorage.setItem("traveler_id", signUpResponse.userSub);
    localStorage.setItem("clubSignupPhase", "1");
    localStorage.setItem("cogName", name);
    localStorage.setItem("email", email);
    axios
      .post(`https://uu2zdh3pq2.execute-api.us-east-1.amazonaws.com/Stage/create_traveler`, {
        email,
        traveler_id: signUpResponse.userSub,
      })
      .then((data) => {
        console.log("verify that a user has been created and saved in the traveler's databse: ", data);
      })
      .catch((error) => {
        console.log(error);
      });
    setStep(1);
  }
};
//TODO: Remove un-needed export statments
export const FormikStep: FC<FormikStepProps> = ({ children, label }) => {
  return <>{children}</>;
};

export const FormikStepper: FC<FormikSteperProps> = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children);
  const { step, awsSignUp } = props.helpers;
  const [completed, setCompleted] = useState(false);
  const [registered, setRegistered] = useState(true); // Not in use

  const currentChild = childrenArray[step];
  return (
    <Formik
      {...props}
      initialValues={{}}
      onSubmit={async (values, helpers) => {
        if (step === 0) awsSignUp(values);
        else if (null) {
          console.log("null");
        }
      }}
    >
      <>
        {/* {step === 3 ? null : (
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => {
              return index < 3 ? <div>{child.props.label}</div> : null;
            })}
          </Stepper>
        )} */}

        <section className="fm-head ">
          <hgroup>{/* <h2>{ childrenArray[step]?.props.label} </h2> */}</hgroup>
        </section>

        {currentChild}
      </>
    </Formik>
  );
};

export default SignUp;
// Async Validation
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Step 1: The user will see an image on the right and the sign up cta on the left.
 * Step 2: The user will be able to choose from one of three plans. Each card will have the information
 * about the plan in brief but if the user clicks learn more a modal will popup with detailed
 * information about the plan and probably comparisons.
 * Step 3: As normal the user will see a summary of what they chose and the price. In addition they
 * will be able to enter their payment info and hit submit.
 * Step 4: The user will get a "celebration" after the payment is confirmed. From there they will see
 * options on what to do next.
 *
 */
