import { Field } from "formik";
import Button from "../../../core/Button";
import { FormikInput } from "../../../core/Input";
import Section from "../../../core/Section";
import Type from "../../../core/Type";

export default ({ handleKeyDown }) => {
  return (
    <div className="isaform">
      <Section>
        <div>
          <Type variant="heading">Let's start by creating your account.</Type>
        </div>
      </Section>
      <Section>
        <Field
          type="text"
          name="name"
          // onChange={handleInputChange} ?? Is this needed?
          label="Name"
          placeholder="It wasn't me"
          component={FormikInput}
          onKeyDown={handleKeyDown}
        ></Field>
      </Section>
      <Section>
        <Field
          type="text"
          name="email"
          placeholder="you@yours.com"
          component={FormikInput}
          label="Email"
          onKeyDown={handleKeyDown}
          // InputProps={{
          //   onKeyUp: (e) => {
          //     onInputChange(e);
          //   },
          // }}
        ></Field>
      </Section>
      <Section>
        <Field name="password" type="password" placeholder="Make sure it is secure" component={FormikInput} label="Password" onKeyDown={handleKeyDown}></Field>
      </Section>
      {/* <Section>
        <div>
          <Field fullWidth name="confirmpassword" placeholder="Copy and paste from your brain" component={FormikInput} label="Confirm password"></Field>
        </div>
      </Section> */}
      <Section>
        <div className="ml-2 flex items-center">
          <input className="mr-2 rounded border-gray-300" id="terms-n-privacy" name="terms" type="checkbox" />
          <label htmlFor="terms" className="ml-2 block text-sm text-blue-900">
            <span>By clicking join you agree to enjoythevi’s </span>
            <a href="/help/privacy" className="text-blue-600" target="_blank">
              Privacy
            </a>
            <span> + </span>

            <a href="/help/terms" className="text-blue-600" target="_blank">
              Terms and Conditions
            </a>
            <span>.</span>
          </label>
        </div>
      </Section>
      <Section>
        <div>
          <Button type="submit" fullWidth text="Create account" />
        </div>
        <div className="flex mt-4 justify-center">
          <div>
            <a href="/club">Learn more</a>
          </div>
        </div>
      </Section>
    </div>
  );
  //   async function handleInputChange(e) {
  //     if (e.target.name === "name") setName(e.target.value);
  //     if (e.target.name === "email") setEmail(e.target.value);
  //     if (e.target.name === "password") setPassword(e.target.value);
  //     // const element = document.getElementById(e.target.id);
  //     // if (e.target.value) element.classList.remove("is-danger");
  //     // else element.className += " is-danger";
  //   }
};
