import { FC } from "react";

interface NotificationProps {
  string: string;
}
const Notification: FC<NotificationProps> = ({ string }) => {
  return (
    <div>
      <div>Notification</div>
    </div>
  );
};

export default Notification;

/*** Notes ***
 * Notes go here.
 */
