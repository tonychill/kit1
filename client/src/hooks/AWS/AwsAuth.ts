import axios from "axios";
import Auth from "@aws-amplify/auth";
import { ISignUpResult } from "amazon-cognito-identity-js";
import { MouseEvent } from "react";


export async function createAccount(name?: string, email?: string, password?: string): Promise<ISignUpResult> {
  try {
    return await Auth?.signUp({
      username: email!, //`${d.getTime()}@ilanlyfe.com`, //Testing: userflow (original=> password: email,)
      password: password!,
      attributes: {
        email,
        name,
      },
    });
  } catch (error) {
    return error;
  }
}
export async function handleSignUp(name?: string, email?: string, password?: string) {
  //TODO: Add paramater validation before calling the API.
  try {
    const signUpResponse = await createAccount(name, email!, password);
    addUserToDatabase(signUpResponse, email);
    console.log(signUpResponse);
    return signUpResponse;
  } catch (error) {
    console.log(error);
    return error;
    // let err = null;
    // !error.message ? (err = { message: error }) : (err = error);
    // alert(!error.message ? error : error.message);
  }
}
export function addUserToDatabase(signUpResponse: ISignUpResult, email?: string) {
  //TODO: See if the 'signUpResponse' object returned from Cognito has the user's email address and if so use it vs passing an un-needed email param to the confirmSignUp function.
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
}
export async function resetPassword() {}
