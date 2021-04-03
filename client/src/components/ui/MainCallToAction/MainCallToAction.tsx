import { FC, useState } from "react";
import Button from "../../core/Button";
import Section from "../../core/Section";
import Type from "../../core/Type";
import Link from "../../core/Link";
import Modal from "../../core/Modal";
import SignUp from "../Forms/SignUp/index";

interface MainCallToActionProps {}
const MainCallToAction: FC<MainCallToActionProps> = ({}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div
      className="-mt-8 mb-8 flex items-center h-128"
      style={{
        backgroundImage: "url(https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/destinations/vanuatu-fiji/vanuatu-fiji-cabanas.jpg?$750x667$)",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
    >
      <div className="p-4 mt-24">
        <Section>
          <div>
            <Type variant="shout" color="#fff">
              Earn, plan, <br className="mt-4"></br>enjoy.
            </Type>
          </div>
        </Section>
        <Section>
          <Type variant="wet" color="#fff">
            Earn rewards by helping others discover great experiences. Sign up and get up to 10,000 in points towards your next trip.{" "}
          </Type>
        </Section>
        <Section>
          <div className="$wrapper flex flex-row items-center">
            <div className="flex">
              <Button text="Join the club." onClick={toggleModalOpen} />
            </div>
            <div className="ml-8">
              <Link href="/help/1vDbUQkuG3VyTC4Az40Pfo" text="Learn more" icon="arrow-r" color="#fff" iconPlacement="right" />
            </div>
          </div>
        </Section>
      </div>
      <Modal open={isModalOpen} toggleModal={toggleModalOpen}>
        <SignUp />
      </Modal>
    </div>
  );
  function toggleModalOpen() {
    setModalOpen(!isModalOpen);
  }
};

export default MainCallToAction;

/*** Notes ***
 * Notes go here.
 */
