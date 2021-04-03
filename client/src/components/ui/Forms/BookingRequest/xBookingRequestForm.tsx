import { useState, useEffect, FC, FormEvent } from "react";
import axios from "axios";
import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./BookingRequestForm.module.css";
import SignUp from "../SignUp/index";
import Modal from "../../../core/Modal";
import Button from "../../../core/Button";
import Input from "../../../core/Input";
import Type from "../../../core/Type";
import DatePicker from "../../../ui/DatePicker";
import { ExperienceFields } from "../../../../ts/page-props";
import { AuthSession } from "../../../../ts";

interface BookingReqProps {
  session?: AuthSession;
  experience: ExperienceFields;
}
interface BookingRequest {
  name: string;
  notes: string;
  email: string;
}
interface User {
  name: string;
}

const BookingRequestForm: FC<BookingReqProps> = ({ session = {}, experience }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [reqState, setReqState] = useState("ready");
  const [guests, setGuests] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openJoinModal, setOpenJoinModal] = useState(false);
  useEffect(() => {}, [session]);
  //&& "rate" in experience ?
  return (
    <div className={clsx("flex w-full sm:mt-8 flex-wrap")}>
      <div className={clsx("md:rounded-lg md:border md:shadow-md")}>
        <div className={s.form_wrap_inner}>
          <section className={s.heading}>
            <div className="flex">
              <span>
                <Type variant="bold">{`$${Math.floor(experience.rate / 7)}`}</Type>
              </span>

              <span className="ml-1">
                <Type variant="base">/night+</Type>
              </span>
            </div>
            <div>
              <DatePicker startDate={startDate} endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate} />
              <div className="mt-4">
                <Input className={s.guestInpu} label="Guests" placeholder="" type="number" name="guests" value={guests} onChange={handleInputChange} />
              </div>
            </div>
            <div>
              <Button onClick={handleBookingRequest} text={reqState === "processing" ? "Processing" : "Send request"} />
            </div>
          </section>

          {!session.isAuthenticated ? (
            <section>
              <div className={s.heading}>
                <Type variant="heading">Oops, looks like you're missing out!</Type>{" "}
              </div>
              <div className={s.heading}>
                <Type variant="base">Join the best travel club in the Caribbean where you will enjoy so much things to do where ever you go. </Type>{" "}
              </div>
              <div className={s.content}>
                <Button text="Join" onClick={handleSignUp} />
              </div>
            </section>
          ) : null}
        </div>
      </div>

      <Modal open={isModalOpen} title="Booking Request" toggleModal={toggleModal}>
        {reqState === "not_auth" ? (
          <>
            <h2>Please enter your infomation so we can reach out.</h2>
            <Formik
              initialValues={{ name: "", email: "", notes: "" }}
              validate={(values) => {
                const errors: { email?: string } = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = "Invalid email address";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                handleNotAuthBookingRequest(values);
              }}
            >
              {() => (
                <Form>
                  <h4>Name</h4>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" />
                  <h4>Email</h4>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <h4>Special requests</h4>
                  <Field type="text" name="notes" />
                  <ErrorMessage name="notes" component="div" />
                  {/* <Field type="number" name="phone" />
                <ErrorMessage name="phone" component="div" /> */}
                  <button type="submit" disabled={isDisabled(reqState)}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </>
        ) : reqState === "processing" ? (
          <div>We're working on your request.</div>
        ) : reqState === "ready" ? (
          <div>We're ready for your request.</div>
        ) : reqState === "done" ? (
          <div>We're done, thank you.</div>
        ) : null}
      </Modal>
      <Modal title="Join the club" open={openJoinModal} toggleModal={handleJoinClose}>
        <SignUp />
      </Modal>
    </div>
  );

  async function sendBookingRequest(req: BookingRequest) {
    const request = {
      name: req.name,
      email: req.email,
      requests: [
        {
          req: {
            name: "Location:",
            value: experience.place,
          },
        },
        {
          req: {
            name: "Email:",
            value: req.email,
          },
        },
        {
          req: {
            name: "Villa:",
            value: experience.name,
          },
        },
        {
          req: {
            name: "Dates:",
            value: `From: ${startDate} to ${endDate}`,
          },
        },
        {
          req: {
            name: "Notes:",
            value: req.notes,
          },
        },
        {
          req: {
            name: "Guests:",
            value: guests,
          },
        },
      ],
    };
    try {
      const res = await axios.post("https://liu1h3b6kg.execute-api.us-east-1.amazonaws.com/dev/booking_request", request);
      // await addDealToPipeDrive();
    } catch (err) {
      console.log(err);
    }
  }
  // async function addDealToPipeDrive(name, email, person_id, status, add_time) {
  //   let response;
  //   const dealObj = { name, email, user_id, person_id, status, add_time };
  //   /** Call pipedrive and create a new deal.
  //    * if (lead) add deal to lead else new lead + new deal
  //    * pass deal object off to pipedrive dealObj
  //    *
  //    */
  //   return response;
  // }

  async function handleNotAuthBookingRequest(req: BookingRequest) {
    // setReqState("not_auth");
    setReqState("processing");
    try {
      await sendBookingRequest(req);
      setReqState("done");
      // addDealToPipeDrive()
      //For testing
      // setTimeout(() => {
      //   alert(JSON.stringify(req, null, 2));
      //   setSubmitting(false);
      // }, 400);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleBookingRequest(message?: string) {
    setReqState("processing");
    toggleModal();
    try {
      // const session = await Auth.currentSession();
      // const {
      //   idToken: {
      //     payload: { name, email, sub },
      //   },
      // } = session;

      // setCurrentUser({ name, email, sub });

      //Send traveler request to server and get a response
      setReqState("done");
    } catch (error) {
      setReqState("not_auth");

      //Send traveler request to server and get a response
      //After response provide the user with a message. message should come from the server.
    }
  }
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }
  // function toggleModal() {
  //   setIsModalOpen(!open);
  // }
  function handleInputChange(e: FormEvent<HTMLInputElement>) {
    if (e.currentTarget.name === "guests" && +e.currentTarget.value > 0) setGuests(+e.currentTarget.value);

    //TODO: Possibel future implementations
    // if (e.target.name === "name") setName(e.target.value);
    // if (e.target.name === "email") setEmail(e.target.value);
    // if (e.target.name === "phone") setPhone(+e.target.value);
  }
  function handleFormSubmit(e: HTMLFormElement) {
    e.preventDefault();
    if ("name" in currentUser) {
      callRequestApi(currentUser);
      //let user know that their request has been recieved.
    }
  }

  function callRequestApi(currentUser: User) {
    //call api for booking requests
    //return the response from the server.
  }
  function handleSignUp() {
    setOpenJoinModal(true);
  }
  function handleJoinClose() {
    setOpenJoinModal(false);
  }
  function isDisabled(reqState: string): boolean | undefined {
    const state = "processing";
    return reqState === state;
  }
};

export default BookingRequestForm;
