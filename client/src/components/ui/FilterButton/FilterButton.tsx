import { FC } from "react";
import Button from "../../core/Button";

interface FilterButtonProps {
  handleGetResults: () => Promise<void>;
}
const FilterButton: FC<FilterButtonProps> = ({ handleGetResults }) => {
  return (
    <div>
      FilterButton
      <div>{/* <Button /> */}</div>
    </div>
  );
};

export default FilterButton;

/*** Notes ***
 * 1. User can enter their prefs.
 * 2. User can submit their prefs.
 * 3. The 'handlerGetResults' will fetch the refined results from the server.
 * 4. The user's view will then be refreshed.
 *
 */
